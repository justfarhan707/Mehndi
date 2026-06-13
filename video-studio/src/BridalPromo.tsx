import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const palette = {
  brown: '#2e1d17',
  cream: '#fff7ec',
  gold: '#e7cba7',
  henna: '#a75235',
  sage: '#73836c',
};

const heroImages = [
  'assets/bridal/WhatsApp Image 2026-06-09 at 2.50.00 PM.jpeg',
  'assets/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM.jpeg',
  'assets/gulf/WhatsApp Image 2026-06-09 at 2.47.48 PM.jpeg',
  'assets/party/WhatsApp Image 2026-06-09 at 2.48.31 PM.jpeg',
  'assets/engagement/WhatsApp Image 2026-06-09 at 2.49.15 PM.jpeg',
];

const categories = [
  {
    name: 'Bridal',
    copy: 'story-led details',
    image: 'assets/bridal/WhatsApp Image 2026-06-09 at 2.50.00 PM (1).jpeg',
  },
  {
    name: 'Arabic',
    copy: 'flowing florals',
    image: 'assets/arabic/WhatsApp Image 2026-06-09 at 2.46.37 PM.jpeg',
  },
  {
    name: 'Gulf',
    copy: 'bold elegance',
    image: 'assets/gulf/WhatsApp Image 2026-06-09 at 2.47.49 PM (1).jpeg',
  },
  {
    name: 'Party',
    copy: 'festive moments',
    image: 'assets/party/WhatsApp Image 2026-06-09 at 2.48.32 PM (1).jpeg',
  },
];

const imageGrid = [
  'assets/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM (1).jpeg',
  'assets/arabic/WhatsApp Image 2026-06-09 at 2.46.37 PM (1).jpeg',
  'assets/gulf/WhatsApp Image 2026-06-09 at 2.47.48 PM (1).jpeg',
  'assets/party/WhatsApp Image 2026-06-09 at 2.48.31 PM (1).jpeg',
  'assets/engagement/WhatsApp Image 2026-06-09 at 2.49.16 PM (1).jpeg',
  'assets/bridal/WhatsApp Image 2026-06-09 at 2.50.01 PM (3).jpeg',
];

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const Brand = ({dark = false}: {dark?: boolean}) => {
  return (
    <div style={{alignItems: 'center', display: 'flex', gap: 18}}>
      <div
        style={{
          alignItems: 'center',
          border: `2px solid ${dark ? palette.henna : palette.gold}`,
          borderRadius: 999,
          color: dark ? palette.henna : palette.gold,
          display: 'flex',
          fontFamily: 'Georgia, serif',
          fontSize: 44,
          height: 72,
          justifyContent: 'center',
          width: 72,
        }}
      >
        M
      </div>
      <div>
        <div
          style={{
            color: dark ? palette.brown : palette.cream,
            fontFamily: 'Georgia, serif',
            fontSize: 46,
            letterSpacing: 2,
            lineHeight: 1,
          }}
        >
          Mehwish
        </div>
        <div
          style={{
            color: dark ? palette.sage : palette.gold,
            fontFamily: 'Arial, sans-serif',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 6,
            marginTop: 8,
            textTransform: 'uppercase',
          }}
        >
          Mehndi Studio
        </div>
      </div>
    </div>
  );
};

const Kicker = ({children, dark = false}: {children: React.ReactNode; dark?: boolean}) => (
  <p
    style={{
      color: dark ? palette.henna : palette.gold,
      fontFamily: 'Arial, sans-serif',
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: 8,
      margin: 0,
      textTransform: 'uppercase',
    }}
  >
    {children}
  </p>
);

const BigTitle = ({children, dark = false}: {children: React.ReactNode; dark?: boolean}) => (
  <h1
    style={{
      color: dark ? palette.brown : palette.cream,
      fontFamily: 'Georgia, serif',
      fontSize: 116,
      fontWeight: 400,
      letterSpacing: -3,
      lineHeight: 0.94,
      margin: 0,
    }}
  >
    {children}
  </h1>
);

const HeroScene = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 18, stiffness: 90}});
  const active = Math.min(heroImages.length - 1, Math.floor(frame / 20));
  const local = frame - active * 20;

  return (
    <AbsoluteFill style={{backgroundColor: palette.brown}}>
      <Img
        src={staticFile(heroImages[active])}
        style={{
          height: '100%',
          objectFit: 'cover',
          opacity: interpolate(local, [0, 6, 18, 20], [0, 1, 1, 0], clamp),
          transform: `scale(${interpolate(local, [0, 20], [1.08, 1.16])})`,
          width: '100%',
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(90deg, rgba(46,29,23,.86), rgba(46,29,23,.55), rgba(46,29,23,.18)), linear-gradient(180deg, rgba(46,29,23,.1), rgba(46,29,23,.72))',
        }}
      />
      <div style={{left: 76, position: 'absolute', right: 76, top: 96}}>
        <Brand />
      </div>
      <div
        style={{
          bottom: 160,
          left: 76,
          position: 'absolute',
          right: 76,
          transform: `translateY(${interpolate(entrance, [0, 1], [70, 0])}px)`,
        }}
      >
        <Kicker>Website now live</Kicker>
        <div style={{height: 30}} />
        <BigTitle>
          Book beautiful
          <br />
          <span style={{color: palette.gold}}>mehndi</span> online.
        </BigTitle>
        <p
          style={{
            color: '#f1d9b9',
            fontFamily: 'Arial, sans-serif',
            fontSize: 34,
            lineHeight: 1.3,
            marginTop: 34,
            maxWidth: 780,
          }}
        >
          Browse designs, choose your style, and send your booking enquiry to
          Rumana in one tap.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const WebsiteMockup = () => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [0, 105], [0, -520], clamp);
  const pop = spring({frame, fps: 30, config: {damping: 18, stiffness: 120}});

  return (
    <AbsoluteFill
      style={{
        alignItems: 'center',
        background: `radial-gradient(circle at 80% 20%, #7b3f2a, ${palette.brown} 55%)`,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: palette.cream,
          border: `14px solid ${palette.brown}`,
          borderRadius: 70,
          boxShadow: '0 36px 90px rgba(0,0,0,.42)',
          height: 1420,
          overflow: 'hidden',
          transform: `scale(${interpolate(pop, [0, 1], [0.82, 1])}) rotate(-2deg)`,
          width: 760,
        }}
      >
        <div
          style={{
            alignItems: 'center',
            borderBottom: '1px solid rgba(64,39,30,.14)',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '34px 42px',
          }}
        >
          <Brand dark />
          <div style={{background: palette.henna, color: palette.cream, fontFamily: 'Arial', fontSize: 18, fontWeight: 800, letterSpacing: 2, padding: '18px 22px'}}>
            BOOK
          </div>
        </div>
        <div style={{transform: `translateY(${y}px)`}}>
          <div style={{height: 680, position: 'relative'}}>
            <Img src={staticFile(heroImages[0])} style={{height: '100%', objectFit: 'cover', width: '100%'}} />
            <div style={{background: 'linear-gradient(180deg, rgba(46,29,23,.2), rgba(46,29,23,.78))', inset: 0, position: 'absolute'}} />
            <h2 style={{bottom: 58, color: palette.cream, fontFamily: 'Georgia', fontSize: 76, fontWeight: 400, left: 42, lineHeight: 1, margin: 0, position: 'absolute'}}>
              Stories drawn
              <br />
              by hand
            </h2>
          </div>
          <div style={{padding: 42}}>
            <Kicker dark>Services</Kicker>
            <h2 style={{color: palette.brown, fontFamily: 'Georgia', fontSize: 68, fontWeight: 400, lineHeight: 1, margin: '18px 0 28px'}}>
              Made for your beautiful moments.
            </h2>
            <div style={{display: 'grid', gap: 18, gridTemplateColumns: '1fr 1fr'}}>
              {categories.map((cat) => (
                <div key={cat.name} style={{background: '#efe1cf', height: 300, overflow: 'hidden', position: 'relative'}}>
                  <Img src={staticFile(cat.image)} style={{height: '100%', objectFit: 'cover', width: '100%'}} />
                  <div style={{background: 'linear-gradient(180deg, transparent, rgba(46,29,23,.75))', inset: 0, position: 'absolute'}} />
                  <p style={{bottom: 18, color: palette.cream, fontFamily: 'Georgia', fontSize: 34, left: 18, margin: 0, position: 'absolute'}}>
                    {cat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{background: '#e5d5c5', padding: 42}}>
            <Kicker dark>Booking</Kicker>
            <h2 style={{color: palette.brown, fontFamily: 'Georgia', fontSize: 66, fontWeight: 400, lineHeight: 1, margin: '18px 0'}}>
              Send your enquiry on WhatsApp.
            </h2>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CategoryFlash = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{background: palette.cream}}>
      <div style={{left: 76, position: 'absolute', right: 76, top: 92}}>
        <Kicker dark>Explore designs</Kicker>
        <div style={{height: 24}} />
        <BigTitle dark>
          One gallery.
          <br />
          Every vibe.
        </BigTitle>
      </div>
      <div style={{bottom: 92, display: 'grid', gap: 18, gridTemplateColumns: '1fr 1fr', left: 76, position: 'absolute', right: 76}}>
        {categories.map((cat, index) => {
          const delay = index * 9;
          const enter = interpolate(frame, [delay, delay + 18], [80, 0], clamp);
          const opacity = interpolate(frame, [delay, delay + 14], [0, 1], clamp);

          return (
            <div
              key={cat.name}
              style={{
                background: palette.brown,
                borderRadius: 34,
                height: 470,
                opacity,
                overflow: 'hidden',
                position: 'relative',
                transform: `translateY(${enter}px)`,
              }}
            >
              <Img src={staticFile(cat.image)} style={{height: '100%', objectFit: 'cover', width: '100%'}} />
              <div style={{background: 'linear-gradient(180deg, transparent 40%, rgba(46,29,23,.86))', inset: 0, position: 'absolute'}} />
              <div style={{bottom: 34, left: 34, position: 'absolute', right: 34}}>
                <p style={{color: palette.gold, fontFamily: 'Arial', fontSize: 18, fontWeight: 800, letterSpacing: 5, margin: 0, textTransform: 'uppercase'}}>
                  {cat.copy}
                </p>
                <h2 style={{color: palette.cream, fontFamily: 'Georgia', fontSize: 58, fontWeight: 400, margin: '8px 0 0'}}>
                  {cat.name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const CollageScene = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{background: palette.brown, overflow: 'hidden'}}>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr 1fr', inset: 0, opacity: 0.72, padding: 22, position: 'absolute'}}>
        {imageGrid.map((img, index) => {
          const drift = interpolate(frame, [0, 100], [index % 2 ? -35 : 35, index % 2 ? 35 : -35]);

          return (
            <div key={img} style={{height: index % 2 ? 700 : 580, overflow: 'hidden', transform: `translateY(${drift}px)`}}>
              <Img src={staticFile(img)} style={{height: '100%', objectFit: 'cover', width: '100%'}} />
            </div>
          );
        })}
      </div>
      <AbsoluteFill style={{background: 'rgba(46,29,23,.56)'}} />
      <div style={{bottom: 170, left: 76, position: 'absolute', right: 76}}>
        <Kicker>Designed to convert</Kicker>
        <div style={{height: 28}} />
        <BigTitle>
          From Instagram
          <br />
          to booking.
        </BigTitle>
        <p style={{color: palette.gold, fontFamily: 'Arial', fontSize: 34, lineHeight: 1.32, marginTop: 34, maxWidth: 790}}>
          Visitors can view designs, filter categories, open the gallery, and
          enquire directly on WhatsApp.
        </p>
      </div>
    </AbsoluteFill>
  );
};

const FinalCta = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 7), [-1, 1], [0.96, 1.04]);

  return (
    <AbsoluteFill style={{alignItems: 'center', background: palette.brown, display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
      <div style={{position: 'absolute', top: 104}}>
        <Brand />
      </div>
      <div>
        <Kicker>Mehwish Mehndi Studio</Kicker>
        <div style={{height: 34}} />
        <h1 style={{color: palette.cream, fontFamily: 'Georgia', fontSize: 112, fontWeight: 400, letterSpacing: -3, lineHeight: 0.96, margin: 0}}>
          Website live.
          <br />
          Dates open.
        </h1>
        <p style={{color: palette.gold, fontFamily: 'Arial', fontSize: 36, lineHeight: 1.35, margin: '40px auto 0', maxWidth: 780}}>
          Bridal | Arabic | Gulf | Party | Engagement
        </p>
        <div
          style={{
            background: palette.cream,
            color: palette.brown,
            display: 'inline-block',
            fontFamily: 'Arial',
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: 4,
            marginTop: 58,
            padding: '28px 42px',
            textTransform: 'uppercase',
            transform: `scale(${pulse})`,
          }}
        >
          Book on WhatsApp
        </div>
        <p style={{color: '#cbb8a8', fontFamily: 'Arial', fontSize: 28, marginTop: 38}}>
          @mehwishmehandi_
        </p>
      </div>
    </AbsoluteFill>
  );
};

export const BridalPromo = () => {
  return (
    <AbsoluteFill style={{background: palette.brown}}>
      <Sequence from={0} durationInFrames={105}>
        <HeroScene />
      </Sequence>
      <Sequence from={105} durationInFrames={120}>
        <WebsiteMockup />
      </Sequence>
      <Sequence from={225} durationInFrames={105}>
        <CategoryFlash />
      </Sequence>
      <Sequence from={330} durationInFrames={105}>
        <CollageScene />
      </Sequence>
      <Sequence from={435} durationInFrames={105}>
        <FinalCta />
      </Sequence>
    </AbsoluteFill>
  );
};
