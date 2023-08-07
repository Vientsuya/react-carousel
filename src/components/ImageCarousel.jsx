import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const [currentImageUrl, setCurrentImageUrl] = useState("");

  useEffect(() => {
    const images = fetch(" https://picsum.photos/v2/list?limit=5")
      .then((res) => res.json())
      .then((images) => setCurrentImageUrl(images[0].download_url));
  }, []);

  return (
    <div className="w-[32rem] h-[20rem]">
      <div className="flex justify-between h-full items-center">
        <div>
          <button>Lewo</button>
        </div>
        <img src={currentImageUrl} alt="current-image" />
        <div>
          <button>Prawo</button>
        </div>
      </div>
    </div>
  );
}
