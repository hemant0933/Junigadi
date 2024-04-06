import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "framer-motion";
import Bmw from "../assets/bmw.png";
import Audi from "../assets/audi.png";
import Merce from "../assets/merce.png";
import Mesarati from "../assets/maserati.png";

const carouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [timer, setTimer] = useState(5); // set timer

  const CarsArray = [Bmw, Audi, Merce, Mesarati];

  const imageIndex = wrap(0, CarsArray.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Timer countdown effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 5));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Image change effect
  useEffect(() => {
    const paginationInterval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(paginationInterval);
  }, [page]);

  return (
    <div
      className="w-[70%] h-[50%] md:w-[29%] md:h-[70%]
     flex items-center justify-between flex-col relative bg-gray-50 rounded-xl
     p-4"
    >
      <div
        className="w-full h-16 absolute flex px-10
        items-center justify-between z-[10] top-0
       "
      >
        <button
          className="bg-orange-600 font-bold text-xl
        rounded-md px-10 py-2 cursor-pointer"
        >
          BID
        </button>
        <span className="w-[1px] h-10 bg-slate-400 "></span>
        <span
          className="text-xl text-black p-4
        font-semibold"
        >
          {timer !== 0 ? `00 : 0${timer}` : "Sold"}{" "}
        </span>
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="w-[60vw] absolute bottom-0 md:w-[40vw] object-cover"
          src={CarsArray[imageIndex]}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
};
export default Carousel;
