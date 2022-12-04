import React from 'react'
import { motion } from 'framer-motion'
import classes from './Loader.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Loader = () => {
  const [loader, setLoader] = useState(true)

  const TopScroll = window.pageYOffset || document.documentElement.scrollTop
  const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft

  useEffect(() => {
    window.onscroll = () => {
      window.scrollTo(LeftScroll, TopScroll)
      window.scrollTo(0, 0)
    }

    setTimeout(() => {
      window.onscroll = function () {}
    }, 3000)

    setTimeout(() => {
      setLoader(false)
    }, 3200)
  }, [])

  const variantsLetter = {
    initial: { opacity: 0 },
    show: {
      opacity: 1,
    },
  }

  const variantsWrapper = {
    initial: { opacity: 1 },
    hidden: {
      opacity: 0,
      transition: { delay: 2, duration: 1.5, ease: 'easeInOut' },
    },
  }

  return loader ? (
    <motion.div
      variants={variantsWrapper}
      initial="initial"
      animate="hidden"
      className={classes.loader}
    >
      <div>
        <div>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            I
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            g
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          >
            o
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          >
            r
          </motion.span>
        </div>
        <div>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 1.3, ease: 'easeInOut' }}
          >
            G
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            l
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 1.7, ease: 'easeInOut' }}
          >
            i
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 1.9, ease: 'easeInOut' }}
          >
            s
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 2.1, ease: 'easeInOut' }}
          >
            o
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          >
            v
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          >
            i
          </motion.span>
          <motion.span
            variants={variantsLetter}
            initial="initial"
            animate="show"
            transition={{ duration: 2.6, ease: 'easeInOut' }}
          >
            c
          </motion.span>
          <motion.div
            initial={{ right: '98%' }}
            animate={{ right: 0 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className={classes.line}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  ) : (
    ''
  )
}

export default Loader
