  import './styles.css';
  import { motion, Variants } from 'framer-motion';
  import { useState, useEffect } from 'react';

  // interface MousePosition {
  //   x: number;
  //   y: number;
  // }

  // interface CursorVariants extends Variants {
  //   default: { x: number; y: number };
  //   text: {
  //     x: number;
  //     y: number;
  //     height: number;
  //     width: number;
  //     backgroundColor?: string;
  //     mixBlendMode?: string;
  //     transition?: object;
  //   };
  // }

  export const Header: React.FC = () => {
    // const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    // const [cursorVariant, setCursorVariant] = useState<keyof CursorVariants>("default");

    // useEffect(() => {
    //   const mouseMove = (e: MouseEvent) => {
    //     setMousePosition({ x: e.clientX - 8, y: e.clientY - 8 }); // Center cursor
    //   };

    //   window.addEventListener("mousemove", mouseMove);

    //   return () => {
    //     window.removeEventListener("mousemove", mouseMove);
    //   };
    // }, []); 

    // const variants: CursorVariants = {
    //   default: {
    //     x: mousePosition.x,
    //     y: mousePosition.y,
    //   },
    //   text: {
    //     x: mousePosition.x,
    //     y: mousePosition.y,
    //     height: 50,
    //     width: 50,
    //     backgroundColor: "black",
    //     mixBlendMode: "difference",
    //     transition: {
    //       type: "tween",
    //       duration: 0.3,
    //     },
    //   },
    // };

    // const textEnter = () => setCursorVariant("text");
    // const textLeave = () => setCursorVariant("default");

    return (
      <div className="header-container">
        <motion.div
          className="mask-container"
          // onMouseEnter={textEnter}
          // onMouseLeave={textLeave}
        >
          <div className="header-mask" /> {/* Background mask */}
          <motion.div className="header-text">
            Simply chaotic.<br />
            Reverse Your Chaos.
          </motion.div>
        </motion.div>

        <div className="scroll-container">
          <a href="#">Work with Us</a>
        </div>

        {/* <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        /> */}
      </div>
    );
  };
