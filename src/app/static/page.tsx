import { UnsplashedImage } from "@/models/unsplash-image";
import Image from "next/image";

export default async function page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashedImage = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
      />
      {/* NextJS Image */}
    </div>
  );
}
