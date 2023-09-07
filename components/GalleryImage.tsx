import { CloudinaryContext } from "@/providers/Cloudinary";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useContext } from "react";

interface IProps {
  publicId: string;
}

const GalleryImage: React.FC<IProps> = ({ publicId }) => {
  const cldContext = useContext(CloudinaryContext);
  if (!cldContext) return null;

  const myImage = cldContext.cld.image(publicId);
  myImage.resize(fill().width(700).height(700)).quality("auto:best");
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full">
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default GalleryImage;
