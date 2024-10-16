import { Link } from 'react-router-dom'
import Container from '../UI/Container.jsx'
import classes from './Footer.module.css'
import personalImageWebp from '../../assets/igorglisovic.webp'
import personalImageJpg from '../../assets/igorglisovic.jpg'
import personalImageAvif from '../../assets/igorglisovic.avif'
import LinkHover from '../UI/LinkHover.jsx'
import { scrollAttributes } from '../../data/scrollAtributes.js'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Footer = () => {
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const currentYear = new Date().getFullYear()

  const { ref: lineRef, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const lineVariants = {
    initial: { strokeDasharray: '800px', strokeDashoffset: '800px' },
    animate: {
      strokeDasharray: '800px',
      strokeDashoffset: 0,
      transition: { duration: 2.5, ease: 'easeOut' },
    },
  }

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setTimeout(() => {
        setHasBeenInView(true)
      }, 2500)
    }
  }, [inView, hasBeenInView])

  return (
    <footer data-scroll-section>
      <Container style={{ position: 'relative' }}>
        <motion.svg
          variants={lineVariants}
          initial="initial"
          animate={(inView && !hasBeenInView) || hasBeenInView ? 'animate' : ''}
          viewport={{ once: true }}
          width="152"
          height="800"
          viewBox="0 0 152 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes['bg-line']}
          ref={lineRef}
        >
          <path
            d="M1 1C13.5 40.2911 110.1 138.648 84.5 217.748C52.5 316.622 1 347.641 1 413.945C1 466.988 101 548.749 151 583"
            stroke="#5555ff"
          />
        </motion.svg>
        <div className={classes['main-footer']}>
          <div className={classes['footer-nav']} {...scrollAttributes}>
            <LinkHover>
              <Link to="/projects">My work</Link>
            </LinkHover>
            <LinkHover>
              <Link to="/blog">Blog</Link>
            </LinkHover>
            <a href="mailto:contact@igorglisovic.com">
              <LinkHover>contact@igorglisovic.com</LinkHover>
            </a>
          </div>
          <div className={classes['personal__image']} {...scrollAttributes}>
            <picture>
              <source type="image/avif" srcSet={personalImageAvif} />
              <source type="image/webp" srcSet={personalImageWebp} />
              <source type="image/jpeg" srcSet={personalImageJpg} />
              <img
                alt="Igor Glišović Frontend Developer"
                width={200}
                height={200}
                src={personalImageJpg}
              />
            </picture>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes['bottom-footer']} data-scroll data-scroll-class="loading-active">
          <span>&copy; Igor Glišović {currentYear}</span>
          <ul>
            <li>
              <LinkHover>
                <a target="_blank" href="https://www.linkedin.com/in/igor-glisovic/">
                  LN
                </a>
              </LinkHover>
            </li>
            <li>
              <LinkHover>
                <a target="_blank" href="https://github.com/igorglisovic">
                  GH
                </a>
              </LinkHover>
            </li>
            <li>
              <LinkHover>
                <a target="_blank" href="https://www.youtube.com/@splajs">
                  YT
                </a>
              </LinkHover>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
