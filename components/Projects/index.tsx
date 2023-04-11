import { Project } from '@/components'

import { projects } from '@/data/projects'

import styles from './styles.module.css'

const Projects = () => {
  return (
    <section 
      className={`${styles.projects}`}
      style={{
        "--project-count": projects.length
      } as React.CSSProperties }
    >
      {projects.map(({ id, title, description, link, bg, text }, index) => (
        <>
          <Project
            key={id}
            id={id} 
            title={title}
            description={description}
            link={link}
            bg={bg}
            textColor={text}
            index={index}
          />
        </>
      ))}
    </section>
  )
}

export { Projects }