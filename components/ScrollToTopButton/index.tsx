import { useEffect } from "react";
import { 
  motion, 
  useAnimationControls, 
  useScroll, 
  Variants, 
  isBrowser 
} from "framer-motion";
import { AiOutlineArrowUp } from 'react-icons/ai'

import styles from './styles.module.css'

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

function scrollToTop() {
    if (!isBrowser) return;
    window.scrollTo({ top: 0 });
}

function ScrollToTopButton() {
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
    >
      <span>Back to top</span>
      <AiOutlineArrowUp />
    </motion.button>
  );
}

export { ScrollToTopButton }