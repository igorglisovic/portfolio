import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import HamburgerList from './HamburgerList.jsx'
import classes from './HamburgerMenu.module.css'

const HamburgerMenu = ({ aboutMeRef, projectsRef, contactMeRef, heroRef }) => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()

  const ref = useRef()

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

  const lineVariants = {
    initial: { strokeDasharray: '1700px', strokeDashoffset: '1700px' },
    animate: {
      strokeDasharray: '1700px',
      strokeDashoffset: 0,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  }

  return (
    <div ref={ref} className={classes.hamburger}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isOpen ? 'show' : ''}
        className={classes['nav-wrapper']}
      >
        <motion.svg
          variants={lineVariants}
          initial="initial"
          animate={isOpen ? 'animate' : ''}
          xmlns="http://www.w3.org/2000/svg"
          width="410"
          height="1029"
          viewBox="0 0 410 1029"
          data-shape="true"
          className={classes['bg-line']}
        >
          <path
            fill="none"
            stroke={expand ? 'var(--secondary-clr)' : 'var(--main-clr)'}
            strokeMiterlimit="50"
            d="M-595.702 68.801c170.37-196.112 467.886-203.922 648.382-23.426 118.036 118.036 155.527 286.059 112.51 435.858-4.761 16.58-12.01 32.283-19.316 47.909a138.955 138.955 0 00-9.03 25.534c-11.945 47.534.67 99.913 37.845 137.087 24.143 24.144 54.677 37.886 86.17 41.312 5.473.626 11.028.919 16.625.918 32.33 3.426 63.742 17.627 88.47 42.354 61.444 61.445 57.39 163.708-12.16 219.767-51.833 41.779-127.42 43.175-180.571 3.087-34.726-26.19-54.364-63.667-58.474-102.473 0-5.596-.293-11.151-.92-16.624-3.425-31.494-17.166-62.028-41.31-86.172-37.174-37.174-89.555-49.788-137.088-37.841a140.596 140.596 0 00-25.545 9.04c-15.375 7.181-30.8 14.359-47.102 19.074-158.488 45.834-337.525 1.47-456.231-133.131-145.451-164.927-146.471-416.267-2.255-582.273zm477.57 432.312c78.526-78.524 78.527-206.402 0-284.928-78.582-78.583-206.402-78.525-284.927 0-78.583 78.583-78.583 206.345 0 284.928 78.526 78.526 206.345 78.583 284.928 0z"
          ></path>
        </motion.svg>
        <HamburgerList
          isOpen={isOpen}
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          contactMeRef={contactMeRef}
          heroRef={heroRef}
          setIsOpen={setIsOpen}
          buttonRef={ref}
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
