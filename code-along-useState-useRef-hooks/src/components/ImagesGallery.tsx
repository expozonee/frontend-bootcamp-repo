import { useEffect, useRef } from "react";

const IMAGES = [
  {
    id: 1,
    imageUrl: "/images/1.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    imageUrl: "/images/2.jpg",
    alt: "Image 2",
  },
];

export default function ImagesGallery() {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.classList.contains("image")) {
        imagesRef.current?.querySelectorAll("img").forEach((image) => {
          image.style.removeProperty("border");
        });
      }
    }

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  function handleClick(index: number) {
    if (!imagesRef.current) return;

    const images = imagesRef.current.querySelectorAll("img");
    images.forEach((image) => [image.style.removeProperty("border")]);

    const img: HTMLImageElement | null =
      imagesRef.current.querySelectorAll("img")[index];
    if (!img) return;
    img.style.border = "5px solid red";
  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div
        style={{ display: "flex", gap: "0.5rem" }}
        ref={imagesRef}
        className="images-container"
      >
        {IMAGES.map((image, index) => {
          return (
            <img
              key={image.id}
              width={500}
              height={500}
              src={image.imageUrl}
              alt={image.alt}
              className="image"
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
