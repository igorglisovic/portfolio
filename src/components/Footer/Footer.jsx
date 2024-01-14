import { Link } from 'react-router-dom'
import Container from '../UI/Container.jsx'
import classes from './Footer.module.css'
import personalImageWebp from '../../assets/igorglisovic.webp'
import personalImageJpg from '../../assets/igorglisovic.jpg'
import personalImageAvif from '../../assets/igorglisovic.avif'
import LinkHover from '../UI/LinkHover.jsx'
import { scrollAttributes } from '../../data/scrollAtributes.js'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer data-scroll-section>
      <Container style={{ position: 'relative' }}>
        <svg
          width="152"
          height="800"
          viewBox="0 0 152 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes['bg-line']}
        >
          <path
            d="M1 1C13.5 40.2911 110.1 138.648 84.5 217.748C52.5 316.622 1 347.641 1 413.945C1 466.988 101 548.749 151 583"
            stroke="#5555ff"
          />
        </svg>
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
                alt="Igor Glisovic Frontend Developer"
                width={200}
                height={200}
                src={personalImageJpg}
              />
            </picture>
          </div>
        </div>
      </Container>
      <Container>
        <div
          className={classes['bottom-footer']}
          data-scroll
          data-scroll-class="loading-active"
        >
          <span>&copy; Igor Glisovic {currentYear}</span>
          <ul>
            <li>
              <LinkHover>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/igor-glisovic/"
                >
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
