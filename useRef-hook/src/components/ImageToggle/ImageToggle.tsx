import { useRef } from "react";

export default function ImageToggle() {
  const imagesRef = useRef<HTMLDivElement>(null);

  const IMAGES = [
    {
      id: 1,
      src: "/images/1-black.jpg",
      coloredImage: "/images/1.jpg",
      alt: "nature",
    },
    {
      id: 2,
      src: "/images/2-black.jpg",
      coloredImage: "/images/2.jpg",
      alt: "nature",
    },
  ];

  IMAGES.forEach((image) => {
    const img = new Image();
    img.src = image.coloredImage;
  });

  function handleHover(id: number, index: number, action: string) {
    if (!imagesRef.current) return;
    const imagesContainer = imagesRef.current;

    const img =
      imagesContainer.querySelectorAll<HTMLImageElement>("div > img")[index];
    if (!img) return;
    const hoveredImage = IMAGES.find((image) => image.id === id);

    if (!hoveredImage) return;

    if (action === "enter") {
      img.src = hoveredImage.coloredImage;
    } else {
      img.src = hoveredImage.src;
    }
  }

  return (
    <div ref={imagesRef}>
      {IMAGES.map((image, index) => (
        <img
          key={image.id}
          onMouseEnter={() => handleHover(image.id, index, "enter")}
          onMouseLeave={() => handleHover(image.id, index, "leave")}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
