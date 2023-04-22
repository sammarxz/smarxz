/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useNextSanityImage } from 'next-sanity-image'

import { client } from '@/config/sanity.config'

import { ProjectImageType } from '@/types/project.type'

import styles from './styles.module.css'

type ProjectProps = {
  images: ProjectImageType[]
}

const Project = ({ images }: ProjectProps) => {
  const renderImages = () => {
    return images.map((image) => {
      const props = useNextSanityImage(client, image)

      return (
        <article key={image._key} className={styles.project}>
          <motion.div 
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: {
                delay: 0.2
              } 
            }}
            viewport={{ once: true }}
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

  return <>{renderImages()}</>
}

export { Project }