import { ImageBody } from "../logic/md-compiler";

interface ImageComponentProps {
  image: ImageBody;
}

export default function ImageComponent(props: ImageComponentProps) {
  return <div>{props.image.src}</div>;
}
