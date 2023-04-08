import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const lineAnim = {
  initial: { 
    y: 100,
  },
  animate: (i:number) => {
    const delay = i * 0.1;
    return {
      y: 0,
      transition: {
        delay,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.4,
      }
    }
  },
};

type AnimatedLinesProps = {
  delay: number
  children: string 
}

const AnimatedLines = ({ delay, children } : AnimatedLinesProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([])
  
  useEffect(() => {
    if (divRef.current) {
      const div = divRef.current;
      const words = children.split(' ');
      const maxWidth = div.clientWidth;

      let actualWidth = 0;
      let tempLine = '';

      const newLines = [];
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
  
        if (actualWidth + word.length * 10 > maxWidth) {
          newLines.push(tempLine);
          tempLine = word;
          actualWidth = word.length * 10;
        } else {
          tempLine += ' ' + word;
          actualWidth += word.length * 10 + 10;
        }
      }
  
      newLines.push(tempLine);
  
      setLines(newLines);
    }
  }, [children, divRef])

  console.log(lines)

  return (
    <motion.div 
      ref={divRef}
      className='lines'
    >
      {lines.map((line, index) => (
        <motion.div
          key={line} 
          className="o--hidden"
        >
          <motion.span 
            variants={lineAnim}
            initial="initial" 
            animate="animate"
            custom={delay * index}
            className="d--inline-block"
          >
            {line}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  )
}

export { AnimatedLines }