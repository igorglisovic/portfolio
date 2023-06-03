import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../UI/Container'
import classes from './AboutMe.module.css'
import { scrollAttributes } from '../../data/scrollAtributes'

const AboutMe = React.forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className={classes.aboutme}
      id="about"
      data-scroll-section
    >
      <Container>
        <div className={classes['title']}>
          <h2 {...scrollAttributes}>About Me</h2>
        </div>
        <div className={classes['aboutme-wrapper']}>
          <article
            data-scroll
            data-scroll-class="loading-active"
            className={`${classes['aboutme-article']}`}
          >
            <h3 data-scroll data-scroll-speed="0.3" data-scroll-delay="0.04">
              Short story about me.
            </h3>
            <p data-scroll data-scroll-speed="0.7" data-scroll-delay="0.04">
              Developer from Serbia with a great love for programming and a goal
              to do what he loves. Always curious, sociable, and responsible
              with never a lack of hard work!
            </p>
            <p data-scroll data-scroll-speed="0.7" data-scroll-delay="0.04">
              Well-organized person, problem solver, and employee with great
              attention to detail. Fan of BMW, computer hardware, football, and
              shooter games.
            </p>
            <p data-scroll data-scroll-speed="0.7" data-scroll-delay="0.04">
              I'm outright confident, naturally inquisitive, and perpetually
              working on improving my skills every day.
            </p>
          </article>
          <div
            data-scroll
            data-scroll-speed="0.05"
            data-scroll-delay="0.03"
            data-scroll-class="loading-active"
            className={`${classes['aboutme-skills']}`}
          >
            <h3 data-scroll data-scroll-speed="0.3" data-scroll-delay="0.04">
              Skills
            </h3>
            <ul
              data-scroll
              data-scroll-speed="0.7"
              data-scroll-delay="0.04"
              className={classes['aboutme-skills__list']}
            >
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>Wordpress</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Photoshop</li>
              <li>Figma</li>
            </ul>
            <Link
              data-scroll
              data-scroll-speed="0.7"
              data-scroll-delay="0.04"
              className={classes['cv-btn']}
              to="/cv"
            >
              See My CV
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
})

export default AboutMe
