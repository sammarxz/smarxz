import { LayoutGroup } from 'framer-motion'

import { Project } from '@/components'

import { projects } from '@/data/projects'

const Projects = () => {
  return (
    <LayoutGroup id="projects">
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
    </LayoutGroup>
  )
}

export { Projects }