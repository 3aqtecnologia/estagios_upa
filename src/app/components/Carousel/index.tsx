'use client'
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ cards, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.min(cards.length - 1, currentIndex + 2)
        ? 0
        : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.min(cards.length - 1, currentIndex + 1) : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextCard, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextCard, interval);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-3/4 max-w-screen-lg overflow-hidden h-80">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / Math.min(cards.length, 3))}%)`,
            width: `${cards.length * (100 / Math.min(cards.length, 3))}%`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-${100 / Math.min(cards.length, 3)} px-2`}
            >
              <div className="p-4 bg-white rounded-lg shadow-lg">
                {/* Conteúdo do cartão aqui */}
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          onClick={prevCard}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft className="mr-2" /> Anterior
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center ${currentIndex === Math.min(cards.length - 1, currentIndex + 1)
              ? 'opacity-50 cursor-not-allowed'
              : ''
            }`}
          onClick={nextCard}
          disabled={currentIndex === Math.min(cards.length - 1, currentIndex + 1)}
        >
          Próximo <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
