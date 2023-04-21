/* eslint-disable react/display-name */
import { useContext, useState } from 'react'
import { motion } from 'framer-motion'

import { AnimatedLines, HeaderInfo } from '@/components'

import styles from './styles.module.css'
import { AppContext } from '@/context/state'

const Header = () => {
  const [showCounter, setShowCounter] = useState(false)
  const {state} = useContext(AppContext)

  // console.log(state)

  return (
    <motion.div 
      onViewportEnter={() => setShowCounter(true) }
      onViewportLeave={() => setShowCounter(false) }
    >
      <header className={styles.header}>
        <div className='grid'>
          {showCounter ? (
            <div className='grid-col-1'>
              <h1>
                <AnimatedLines text="Sam Marxz" />
              </h1>
            </div>
            ):(
            <h4 className='grid-col-1'>{state.counter} - {state.totalCount}</h4>
          )}
          <HeaderInfo />
        </div>
      </header>
    </motion.div>
  )
}

export { Header }