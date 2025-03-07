import SimplePage from "@/rendering/simplePage";
import notFoundImage from "./../../public/images/not-found.png";

export default function NotFound() {
  return (
    <SimplePage
      title="Page not found!"
      body={<>This URL doesn&apos;t exist yet.</>}
      image={notFoundImage}
      alt="Detective holding a magnifying glass"
    />
  );
}
