import { useState } from "react";

export default function ImageCarousel() {
  const [currentImageUrl, setCurrentImageUrl] = useState("./assets/react.svg");

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
