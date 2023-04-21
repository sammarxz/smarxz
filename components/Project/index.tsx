import Image from 'next/image'
import { motion } from 'framer-motion'
import { useNextSanityImage } from 'next-sanity-image'

import { useClient } from '@/hooks/useClient'

import styles from './styles.module.css'
import { ProjectImageType } from '@/types/project.type'

type ProjectProps = {
  project: {
    images: ProjectImageType[]
  }
}

const Project = ({ project: { images }}:ProjectProps) => {
  const { client } = useClient()

  const renderImages = () => {
    return images.map((image, index) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const props = useNextSanityImage(client, image)

      return (
        <article key={image._key} className={styles.project}>
          <motion.div 
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.2
              } 
            }}
            viewport={{ once: true }}
            // onViewportEnter={() => setCounter(arr[index])}
            // onViewportLeave={() => setCounter(prevCount => prevCount - 1)}
          >
            <Image 
              {...props}
              placeholder="blur"
              blurDataURL={image.asset._ref}
              quality={100}
              alt=""
            />
          </motion.div>
        </article>
      )
    })
  }

  return renderImages()
}

export { Project }