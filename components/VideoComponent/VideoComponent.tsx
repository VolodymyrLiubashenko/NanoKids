import {StyledVideoComponent} from './VideoComponent.styled';
interface VideoComponentPropsInterface {
  src: string;
}

const VideoComponent: React.FC<VideoComponentPropsInterface> = ({src}) => {
  return <StyledVideoComponent src={src} muted loop autoPlay />;
};

export default VideoComponent;
