import { motion } from 'framer-motion'

import styles from './styles.module.css'

const Footer = () => {
  return (
    <motion.footer
      className={`${styles.footer} container container--sm txt--center`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          delay: 3
        }
      }}
    >
      <p>Hey, thanks for stopping by ✌️</p>
      <p>Have a great day!</p>
    </motion.footer>
  )
}

export { Footer }