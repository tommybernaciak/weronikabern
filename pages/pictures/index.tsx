import GalleryImage from "@/components/GalleryImage";
import { photos } from "./utils";

export default function Pictures() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap">
        {photos.map((photo) => (
          <GalleryImage key={photo.title} publicId={photo.filename} />
        ))}
      </div>
    </div>
  );
}
