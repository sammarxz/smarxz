import { motion } from 'framer-motion'

import { Project } from '@/components'

import { useAppContext } from '@/hooks/useAppContext'
import { ProjectType } from '@/types/project.type'

import styles from './styles.module.css'

type ProjectsProps = {
  projects: ProjectType[]
}

const Projects = ({ projects }:ProjectsProps) => {
  const { setActualProject } = useAppContext()

  return (
    <section className={`${styles.projects}`}>
      {projects.map((project) => (
        <motion.div 
          key={project._id}
          onViewportEnter={() => setActualProject(project.title)}
        >
          <Project images={project.images} />
        </motion.div>
      ))}
    </section>
  )
}

export { Projects }