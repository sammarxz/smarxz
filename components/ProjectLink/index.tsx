import { motion } from 'framer-motion'

import { projects } from '@/data/projects'

import styles from './styles.module.css'

type ProjectsLinkProps = {
  slug: string
  index: number
  bg: string
}

const linksAnim = {
  initial: (i: number) => {
    return {
      y: i * (projects.length * 150),
    }
  },
  animate: (i: number) => {
    const delay = i * 0.05;

    return {
      y: 0,
      transition: { 
        delay,
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.95],
      }
    }
  },
  hover: {
    y: -20,
    transition: {
      type: "spring",
      duration: .5,
      damping: 5,
      bounce: .20
    }
  }
}

const ProjectLink = ({ slug, bg, index }: ProjectsLinkProps) => {
  const invertedArrayIndexes = Array.from({ length: projects.length }, (value, i) => i).reverse()

  return (
    <>
      {index + 1 <= projects.length && (
        <motion.a
          href={`#${slug}`} 
          className={`${styles.projectLink} bg--${projects[index].bg} rounded--top`}
          style={{ 
            "--index": invertedArrayIndexes[index],
            "--bg": bg
          } as React.CSSProperties }
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={linksAnim}
          custom={index + 1}
        ></motion.a>
      )}
    </>
  )
}

export { ProjectLink }