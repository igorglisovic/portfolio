import { Link } from 'react-router-dom'
import Container from '../UI/Container.jsx'
import classes from './Footer.module.css'
import personalImageWebp from '../../assets/igorglisovic.webp'
import personalImageJpg from '../../assets/igorglisovic.jpg'
import personalImageAvif from '../../assets/igorglisovic.avif'
import LinkHover from '../UI/LinkHover.jsx'
import { scrollAttributes } from '../../data/scrollAtributes.js'

const Footer = () => {
  return (
    <footer data-scroll-section>
      <Container>
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
          <span>&copy; Igor Glisovic 2022</span>
          <span>Made with React JS</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
