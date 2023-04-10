import Link  from 'next/link'
import { motion } from 'framer-motion'

import { projects } from '@/data/projects'

type ProjectsLinkProps = {
  id: number
  index: number
}

const linksAnim = {
  initial: (i: number) => {
    return {
      y: i * 300,
    }
  },
  animate: (i: number) => {
    const delay = i * 0.1;

    return {
      y: 0,
      transition: { 
        delay,
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.95],
      }
    }
  }
}

const ProjectLink = ({ id, index }: ProjectsLinkProps) => {
  return (
    <Link href={`#project-${id}`} scroll={false}>
      {index + 1 <= projects.length && (
        <motion.span 
          className={`project-link top-rounded project-link-${index + 1} bg--${projects[index].bg}`}
          initial="initial"
          animate="animate"
          variants={linksAnim}
          custom={index + 1}
        ></motion.span>
      )}
    </Link>
  )
}

export { ProjectLink }