import { animate, motion } from "framer-motion";

const Stairsanimation = () => {
  // variants
  const stairanimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  //calculate the reverse index fat staggred delay

  const reverseIndex = (index) => {
    const totalstep = 6;
    return totalstep - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairanimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.1 * reverseIndex(index),
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairsanimation;
