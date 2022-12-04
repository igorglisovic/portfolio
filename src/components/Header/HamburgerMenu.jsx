import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import HamburgerList from './HamburgerList.jsx'
import classes from './HamburgerMenu.module.css'

const HamburgerMenu = ({ aboutMeRef, projectsRef, contactMeRef, heroRef }) => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()

  let options = {
    rootMargin: '0px',
    threshold: 0.8,
  }

  let options2 = {
    rootMargin: '0px',
    threshold: 0.1,
  }

  useEffect(() => {
    if (location.pathname === '/') {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setExpand(true)
          }
        })
      }, options)

      const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            setExpand(false)
          } else setExpand(true)
        })
      }, options2)

      observer2.observe(projectsRef.current)
      observer.observe(projectsRef.current)
    }
  }, [])

  const variants = {
    hidden: { opacity: 0, visibility: 'hidden' },
    show: {
      opacity: 1,
      visibility: 'visible',
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
  }

  return (
    <div className={classes.hamburger}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isOpen ? 'show' : ''}
        className={classes['nav-wrapper']}
      >
        <HamburgerList
          isOpen={isOpen}
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          contactMeRef={contactMeRef}
          heroRef={heroRef}
        />
      </motion.div>
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className={
          !isOpen
            ? `${classes['button-two']}`
            : `${classes['button-two']} ${classes['button-two-hover']}`
        }
        aria-expanded="false"
        aria-label="hamburger"
      >
        <svg
          stroke={expand ? 'var(--secondary-clr)' : 'var(--main-clr)'}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width="250"
        >
          <line
            className={`${classes.line} ${classes.top}`}
            x1="10"
            x2="90"
            y1="40"
            y2="40"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="0"
          ></line>
          <line
            className={`${classes.line} ${classes.bottom}`}
            x1="90"
            x2="10"
            y1="60"
            y2="60"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="45"
            strokeDashoffset="0"
          ></line>
        </svg>
      </motion.button>
    </div>
  )
}

export default HamburgerMenu
