import { useState } from 'react'
import { motion } from 'framer-motion'

import { AnimatedLines, HeaderInfo } from '@/components'
import { useAppContext } from '@/hooks/useAppContext'

import styles from './styles.module.css'

const Header = () => {
  const [showProjectTitle, setShowProjectTitle] = useState(false)
  const { state: { actualProject, showName }, setShowName } = useAppContext()

  return (
    <>
      <motion.div
        viewport={{
          margin: '70%'
        }}
        onViewportLeave={() => {
          setShowProjectTitle(true)
          setShowName(false)
        }}
        onViewportEnter={() => {
          setShowProjectTitle(false)
          setShowName(true)
      }}
      />
      <header className={styles.header}>
        <div className='grid'>
          <h1 
            className='grid-col-1'
            style={{ opacity: showName ? 1 : 0 }}
          >
            <AnimatedLines text="Sam Marxz" />
          </h1>
          <h1
            className='grid-col-1'
            style={{ opacity: showProjectTitle && !showName ? 1 : 0 }}
          >
            { actualProject }
          </h1>
          <HeaderInfo />
        </div>
      </header>
    </>
  )
}

export { Header }