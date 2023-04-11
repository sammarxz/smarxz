import { motion, useScroll, useTransform } from 'framer-motion'

import { AnimatedLines, GetInTouch } from '@/components'

import styles from './styles.module.css'

const Header = () => {
  const { scrollYProgress } = useScroll();
  const multiplier = useTransform(scrollYProgress, (v) => v * 5.5)
  const inversor = useTransform(multiplier, [0,1], [1, 0])

  return (
    <motion.header 
      className={`${styles.header} grid container container--sm`}
      style={{ opacity: inversor }}
    >
      <h1 className='grid--title mb--md'>
        <AnimatedLines delay={0}>Sam Marxz.</AnimatedLines>
      </h1>
      <div className="grid--description">
        <h2 className='mb--md'>
          <AnimatedLines delay={1}>Designer && Web Developer.</AnimatedLines>
        </h2>
        <h3 className='mb--md'>
          <AnimatedLines delay={2}>Currently working as front-end developer @TCS.</AnimatedLines>
        </h3>
        <h4 className='mb--md'>
          <AnimatedLines delay={3}>Based in Brazil.</AnimatedLines>
        </h4>
      </div>
      <div className='grid--link'>
        <GetInTouch  />
      </div>
    </motion.header>
  )
}

export { Header }