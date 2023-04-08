import { AnimatedLines } from '@/components/AnimatedLines'

const Header = () => {
  return (
    <header className='grid'>
      <h1 className='col-1-1'>
        <AnimatedLines delay={0}>Sam Marxz.</AnimatedLines>
      </h1>
      <div className='col-1-2'>
        <h2 className='mb--medium'>
          <AnimatedLines delay={1}>Designer && Web Developer.</AnimatedLines>
        </h2>
        <h3 className='mb--medium'>
          <AnimatedLines delay={2}>Currently working as front-end developer @TCS.</AnimatedLines>
        </h3>
        <h4 className='mb--medium'>
          <AnimatedLines delay={3}>Based in Brazil 🇧🇷</AnimatedLines>
        </h4>
      </div>
      <a className='col-1-5' href="#contact">
        <AnimatedLines delay={4}>Get in touch.</AnimatedLines>
      </a>
    </header>
  )
}

export { Header }