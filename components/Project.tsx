import { motion } from 'framer-motion'

import { ProjectLink } from '@/components'

type ProjectProps = {
  id: number
  title: string
  description: string
  link?: string
  bg: string
  index: number
}

const Project = ({ id, title, description, link, bg, index } : ProjectProps) => {
  return (
    <>
      <ProjectLink
        key={id}
        id={id} 
        index={index} 
      />
      <motion.article
        key={id}
        id={`project-${id}`}
        className={`project bg--${bg}`}
        initial={{ opacity: 0, visibility: 'hidden' }}
        animate={{ 
          opacity: 1, 
          visibility: 'visible',
          transition: {
            delay: 2
          } 
        }}
      >
        <motion.div
          className='project__info container container--medium d--grid five--cols gap--medium pt--0'
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              duration: 1,
              delay: 0.2
            } 
          }}
          viewport={{ once: true }}
        >
          <h1>{ title }</h1>
          <div className="col-2">
            <p className="opacity--7">{description}</p>
          </div>
          {link ? (
              <div className='col-1-5'>
              <a 
                href={link}
                target="_blank"
              >
                Live Preview
              </a>
            </div>
          ) : ( 
            null
          )}
        </motion.div>
      </motion.article>
    </>
  )
}

export { Project }