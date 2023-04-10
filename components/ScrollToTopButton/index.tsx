import { useEffect } from "react";
import { 
  motion, 
  useAnimationControls, 
  useScroll, 
  Variants, 
} from "framer-motion";
import { AiOutlineArrowUp } from 'react-icons/ai'

import { scrollToTop } from "@/utils";

import styles from './styles.module.css'

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      type: "spring"
    }
  },
  tap: {
    scale: 0.9
  }
};

const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.5) {
        controls.start('show');
      } else {
        controls.start('hide');
      }
    });
  });

  return (
    <motion.button
      className={styles.scrollButton}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
      whileHover="hover"
      whileTap="tap"
    >
      <span>Back to top</span>
      <AiOutlineArrowUp />
    </motion.button>
  );
}

export { ScrollToTopButton }