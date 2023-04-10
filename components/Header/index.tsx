import { AnimatedLines } from '@/components'

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={`${styles.header} grid container container--md`}>
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
        <a href="#contact">
          <AnimatedLines delay={4}>Get in touch.</AnimatedLines>
        </a>
      </div>
    </header>
  )
}

export { Header }