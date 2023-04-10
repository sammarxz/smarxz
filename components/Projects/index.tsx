import { Project } from '@/components'

import { projects } from '@/data/projects'

import styles from './styles.module.css'

const Projects = () => {
  return (
    <section className={`${styles.projects} container container--lg`}>
      {projects.map(({ id, title, description, link, bg }, index) => (
        <>
          <Project
            key={id}
            id={id} 
            title={title}
            description={description}
            link={link}
            bg={bg}
            index={index}
          />
        </>
      ))}
    </section>
  )
}

export { Projects }