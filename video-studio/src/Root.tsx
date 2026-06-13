import {Composition} from 'remotion';
import {BridalPromo} from './BridalPromo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="BridalPromo"
      component={BridalPromo}
      durationInFrames={540}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
