import { motion } from 'framer-motion'
import { useState } from 'react'
import classes from './LinkHover.module.css'

const LinkHover = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    hidden: { width: '0px' },
    show: {
      width: '100%',
    },
  }

  return (
    <motion.span
      onClick={onClick}
      className={classes['link-hover']}
      onHoverStart={() => {
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
      }}
    >
      {children}
      <motion.div
        className={classes['hover-line']}
        variants={variants}
        initial="hidden"
        animate={isHovered ? 'show' : ''}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      ></motion.div>
    </motion.span>
  )
}

export default LinkHover
