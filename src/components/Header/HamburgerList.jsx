import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import classes from './HamburgerList.module.css'
import { motion } from 'framer-motion'
import LinkHover from '../UI/LinkHover.jsx'
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HamburgerList = ({
  aboutMeRef,
  projectsRef,
  contactMeRef,
  heroRef,
  isOpen,
}) => {
  const [homePage, setHomePage] = useState(true)
  const { scroll } = useLocomotiveScroll()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') setHomePage(false)
  }, [homePage])

  const onClickHandler = ref => {
    scroll.scrollTo(ref?.current, {
      duration: 500,
      offset: 0,
    })
  }

  const variants = {
    hidden: { opacity: 0, transform: 'translateY(100px)' },
    show: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  }

  return (
<<<<<<< HEAD
    <nav className={classes.navigation}>
=======
    <div className={classes.navigation}>
>>>>>>> fbb1d5389ff9e2baa5e9adf87a7ffc01d7c375ff
      <ul>
        <motion.li
          variants={variants}
          initial="hidden"
          animate={isOpen ? 'show' : ''}
          transition={{ duration: 0.2, delay: 0, ease: 'easeInOut' }}
        >
          <LinkHover
            onClick={() => {
              onClickHandler(heroRef)
            }}
          >
            <Link to="/">Home</Link>
          </LinkHover>
        </motion.li>
        {homePage && (
          <>
            <motion.li
              variants={variants}
              initial="hidden"
              animate={isOpen ? 'show' : ''}
              transition={{ duration: 0.2, delay: 0.03, ease: 'easeInOut' }}
            >
              <LinkHover
                onClick={() => {
                  onClickHandler(aboutMeRef)
                }}
              >
                About Me
              </LinkHover>
            </motion.li>
            <motion.li
              variants={variants}
              initial="hidden"
              animate={isOpen ? 'show' : ''}
              transition={{ duration: 0.2, delay: 0.06, ease: 'easeInOut' }}
            >
              <LinkHover
                onClick={() => {
                  onClickHandler(projectsRef)
                }}
              >
                Projects
              </LinkHover>
            </motion.li>
            <motion.li
              variants={variants}
              initial="hidden"
              animate={isOpen ? 'show' : ''}
              transition={{ duration: 0.2, delay: 0.09, ease: 'easeInOut' }}
            >
              <LinkHover
                onClick={() => {
                  onClickHandler(contactMeRef)
                }}
              >
                Contact Me
              </LinkHover>
            </motion.li>
          </>
        )}
        <motion.li
          variants={variants}
          initial="hidden"
          animate={isOpen ? 'show' : ''}
          transition={{ duration: 0.2, delay: 0.09, ease: 'easeInOut' }}
          className={classes['social-icons']}
        >
          <a
            href="https://www.linkedin.com/in/igor-glisovic/"
            target="_blank"
            aria-label="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/igorglisovic"
            target="_blank"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.youtube.com/@splajs"
            target="_blank"
            aria-label="youtube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </motion.li>
      </ul>
<<<<<<< HEAD
    </nav>
=======
    </div>
>>>>>>> fbb1d5389ff9e2baa5e9adf87a7ffc01d7c375ff
  )
}

export default HamburgerList
