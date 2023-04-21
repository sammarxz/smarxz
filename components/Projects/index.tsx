import { Project } from '@/components'

import { ProjectsType } from '@/types/project.type'

import styles from './styles.module.css'

type ProjectsProps = {
  projects: ProjectsType[]
}

const Projects = ({ projects }:ProjectsProps) => {
  return (
    <section className={`${styles.projects}`}>
      {projects.map((project) => (
        <Project
          key={project._id}
          project={project}
        />
      ))}
    </section>
  )
}

export { Projects }