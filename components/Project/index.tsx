import { motion } from 'framer-motion'

import { ProjectLink } from '@/components'

import { slugify } from '@/utils'

import styles from './styles.module.css'

type ProjectProps = {
  id: number
  title: string
  description: string
  link?: string
  bg: string
  textColor: string
  index: number
}

const Project = ({ id, title, description, link, bg, textColor, index } : ProjectProps) => {
  const slug = slugify(title)
  const containersScales = ["sm", "md", "lg"]

  return (
    <>
      <ProjectLink
        key={id}
        slug={slug}
        bg={bg}
        index={index}
        scales={containersScales} 
      />
      <motion.article
        key={id}
        id={slug}
        className={`
          ${styles.project} 
          container container--${containersScales[index]} 
        `}
        style={{ 
          "--bg": bg,
          "color": textColor
        } as React.CSSProperties}
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
          className={`${styles.info} container container--${containersScales[index]} grid pt--0`}
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
          <h1 className='grid--title mb--md'>{ title }</h1>
          <div className="grid--description mb--md">
            <p className={styles.description}>{description}</p>
          </div>
          {link ? (
            <div className='grid--link'>
              <a 
                href={link}
                target="_blank"
              >
                Live Preview
              </a>
            </div>
          ) : null}
        </motion.div>
      </motion.article>
    </>
  )
}

export { Project }