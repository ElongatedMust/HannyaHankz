import React, { useState, useEffect } from "react";

function AutoCarousel({ items, interval = 500 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <div className="carousel">
      {items[currentIndex]}
    </div>
  );
  
}

export default AutoCarousel;
