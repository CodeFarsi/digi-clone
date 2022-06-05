import { useEffect, useState } from "react";

export function Slider() {
  const Images = [
    "./images/dgs1.jpg",
    "./images/dgs2.jpg",
    "./images/dgs3.jpg",
  ];

  const [Index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((value) => (value + 1) % Images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        <img src={Images[Index]} alt="" />
      </div>
    </div>
  );
}
