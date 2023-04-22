import { motion } from 'framer-motion'

import { useAppContext } from '@/hooks/useAppContext'
import { social } from '@/data/social'

import styles from './styles.module.css'

const Footer = () => {
  const { setShowName } = useAppContext()

  return (
    <motion.footer id="profile" className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: {
          delay: 0.2
        }
      }}
      onViewportEnter={() => setShowName(true)}
      onViewportLeave={() => setShowName(false)}
    >
      <div className="grid">
        <div className={`${styles.profile} grid-col-2-3`}>
          <p>
            I&apos;m a designer who also knows programming. 
            My passion is creating things that merge my two areas 
            of expertise: design and code.
          </p>
          <p>
            Specifically, I specialize in creating rich and interactive user 
            interfaces as a designer, and in front-end development using 
            React and related technologies as a developer.
          </p>
          <nav className={styles.social}>
            <ul>
              {social.map(({name, link})=> (
                <li key={name}>
                  <a href={link} target='blank'>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.footer>
  )
}

export { Footer }