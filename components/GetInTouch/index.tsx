import { useState } from 'react'
import { AnimatePresence, motion, MotionProps } from "framer-motion";

import { AnimatedLines } from '@/components';

import { social } from '@/data/social';

import styles from './styles.module.css'

const menuVariant = {
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
}

const itemProps: MotionProps  = {
  transition: { opacity: { duration: 0.2 } },
  variants: {
    closed: { opacity: 0  },
    open: { opacity: 1 },
  },
};

const linkProps: MotionProps = {
  transition: {
    y: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: .6,
    }
  },
  variants: {
    closed: { y: 100  },
    open: { y: 0 },
  },
  whileHover: {
    opacity: .4
  }
}

const GetInTouch = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <motion.button 
        onClick={() => setOpen(!open)}
        className={styles.getInTouch}
      >
        <AnimatedLines delay={4}>Get in touch +</AnimatedLines>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul 
            className={styles.list}
            variants={menuVariant}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {social.map(({ name, link }) => (
              <motion.li 
                key={name}
                className={`${styles.item} o--hidden`}
                {...itemProps}
              >
                <motion.a 
                  href={link}
                  className={styles.link}
                  target="_blank"
                  {...linkProps}
                >
                  {name}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  )
}

export { GetInTouch }