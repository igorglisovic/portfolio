import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import classes from './SocialMedia.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const SocialMedia = React.forwardRef((_, ref) => {
  const [mediaMatches, setMediaMatches] = useState(false)

  let media = window.matchMedia('(max-width: 900px)')

  useEffect(() => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }
  }, [])

  const variants = {
    initial: { transform: 'translateX(-65px)' },
    show: { transform: 'translateX(0px)' },
  }

  const variantsWrapper = {
    initial: { transform: 'translate(-65px, -50%)' },
    show: { transform: 'translate(0px, -50%)' },
  }

  return (
    <>
      {!mediaMatches && (
        <motion.div
          variants={variantsWrapper}
          initial="initial"
          animate="show"
          transition={{ delay: 2.7, duration: 0.6, ease: 'easeInOut' }}
          ref={ref}
          className={classes['social-media']}
        >
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            transition={{ delay: 3.8, duration: 0.7, ease: 'easeInOut' }}
            className={classes['social-line']}
          ></motion.div>
          <motion.a
            aria-label="linkedin"
            variants={variants}
            initial="initial"
            animate="show"
            transition={{ delay: 3.6, duration: 0.6, ease: 'easeInOut' }}
            href="https://www.linkedin.com/in/igor-glisovic/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
          <motion.a
            aria-label="github"
            variants={variants}
            initial="initial"
            animate="show"
            transition={{ delay: 3.2, duration: 0.7, ease: 'easeInOut' }}
            href="https://github.com/igorglisovic"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
          <motion.a
            aria-label="youtube"
            variants={variants}
            initial="initial"
            animate="show"
            transition={{ delay: 3, duration: 0.7, ease: 'easeInOut' }}
            href="https://www.youtube.com/@splajs"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </motion.a>
          <motion.div
            variants={variants}
            initial="initial"
            animate="show"
            transition={{ delay: 2.8, duration: 0.7, ease: 'easeInOut' }}
            className={classes['social-line']}
          ></motion.div>
        </motion.div>
      )}
    </>
  )
})

export default SocialMedia
