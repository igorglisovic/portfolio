import { Link } from 'react-router-dom'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { motion } from 'framer-motion'
import HamburgerMenu from './HamburgerMenu.jsx'
import classes from './Header.module.css'

const Header = ({ aboutMeRef, projectsRef, contactMeRef, heroRef }) => {
  const { scroll } = useLocomotiveScroll()

  const onClickHandler = () => {
    scroll.scrollTo('top', {
      duration: 500,
    })
  }

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  }

  return (
    <header>
      <div className={classes['header-wrapper']}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className={classes.logo}
          onClick={onClickHandler}
        >
          <Link to="/">IGOR</Link>
        </motion.div>
        <HamburgerMenu
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          contactMeRef={contactMeRef}
          heroRef={heroRef}
        />
      </div>
    </header>
  )
}

export default Header
