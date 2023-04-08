import { AnimatedLines } from '@/components/AnimatedLines'

const Header = () => {
  return (
    <header className='header container container--medium d--grid five--cols gap--medium'>
      <h1 className='col-1-1'>
        <AnimatedLines delay={0}>Sam Marxz.</AnimatedLines>
      </h1>
      <h2 className='col-1-2'>
        <AnimatedLines delay={1}>Designer && Web Developer.</AnimatedLines>
      </h2>
      <h3 className='col-2-2'>
        <AnimatedLines delay={2}>Currently working as front-end developer @TCS.</AnimatedLines>
      </h3>
      <h4 className='col-3-2'>
        <AnimatedLines delay={3}>Based in Brazil.</AnimatedLines>
      </h4>
      <a className='col-1-5' href="#contact">
        <AnimatedLines delay={4}>Get in touch.</AnimatedLines>
      </a>
    </header>
  )
}

export { Header }