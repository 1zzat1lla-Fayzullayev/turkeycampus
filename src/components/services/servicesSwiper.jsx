import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Swiper = ({ children, autoplayInterval = 300000000000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const swiperRef = useRef(null);
  const autoplayRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardsPerView(4);
    } else if (width >= 768) {
      setCardsPerView(3);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(children.length / cardsPerView) - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(children.length / cardsPerView) - 1
        ? 0
        : prevIndex + 1
    );
  };

  useEffect(() => {
    autoplayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };
    const intervalId = setInterval(play, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [autoplayInterval, cardsPerView]);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX > 50) {
      handlePrev();
    } else if (translateX < -50) {
      handleNext();
    }
    setTranslateX(0);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      ref={swiperRef}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(calc(-${
            (currentIndex * 100) / cardsPerView
          }% + ${translateX}px))`,
          transition: isDragging ? "none" : "transform 0.5s ease",
        }}
      >
        {children.map((child, index) => (
          <div
            className="flex-shrink-0 w-full"
            style={{ width: `${100 / cardsPerView}%` }}
            key={index}
          >
            {child}
          </div>
        ))}
      </div>
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button> */}
      {/* <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button> */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {/* {Array.from({ length: Math.ceil(children.length / cardsPerView) }).map(
          (_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          )
        )} */}
      </div>
    </div>
  );
};

Swiper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  autoplayInterval: PropTypes.number,
};

export default Swiper;
