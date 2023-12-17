import Container from '../UI/Container'
import classes from './Project.module.css'
import { projectsData } from '../../data/projects'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom'
import LinkHover from '../UI/LinkHover'
import {
  scrollAttributes,
  scrollAttributesV2,
} from '../../data/scrollAtributes'
import Card from '../UI/Card'
import { useEffect, useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Project = ({ projectId }) => {
  const [mediaMatches, setMediaMatches] = useState(false)
  const [media, setMedia] = useState(false)

  const { scroll } = useLocomotiveScroll()

  const data = projectsData.find(project => project.id === projectId)

  const moreProjectsData = projectsData
    .filter(project => project.id !== projectId)
    .slice(0, mediaMatches ? 3 : 4)

  useEffect(() => {
    // Scroll to the top of the page on the initial render
    if (scroll) scroll.scrollTo(0, 0)
  }, [scroll])

  const getMediaMatches = () => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }
  }

  useEffect(() => {
    setMedia(window.matchMedia('(max-width: 1100px)'))
  }, [])

  useEffect(() => {
    getMediaMatches()
    window.addEventListener('resize', getMediaMatches)
  }, [media])

  return (
    <>
      <section data-scroll-section className={classes.project}>
        <Container>
          <div className={classes.content}>
            <div className="slide-container">
              <Zoom scale={0.1}>
                {data.imgSlider.map((each, index) => (
                  <img
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                    }}
                    key={index}
                    style={{
                      width: '100%',
                    }}
                    src={each}
                  />
                ))}
              </Zoom>
            </div>
            <div>
              <h2 {...scrollAttributes}>{data.title}</h2>
              {data.description.map((desc, i) => (
                <p className={classes.desc} {...scrollAttributes} key={i}>
                  {desc}
                </p>
              ))}
            </div>
            {data.github && (
              <div className={classes.skills}>
                <h3 {...scrollAttributes}>Source Code</h3>
                <a
                  {...scrollAttributes}
                  aria-label="github repository"
                  className={classes.github}
                  href={data.github}
                  target="_blank"
                >
                  <LinkHover>{data.github}</LinkHover>
                </a>
              </div>
            )}
            <div className={classes.skills}>
              <h3 {...scrollAttributes}>Technologies I used</h3>
              <ul {...scrollAttributes} className={classes['skills__list']}>
                {data.skills.map(skill => (
                  <li key={Math.random()}>{skill}</li>
                ))}
              </ul>
            </div>
            <a
              {...scrollAttributes}
              className={classes.btn}
              href={data.link}
              target="_blank"
            >
              View Project
            </a>
          </div>
        </Container>
      </section>
      <section data-scroll-section className={classes['more-projects']}>
        <Container>
          <div className={classes['more-projects__wrapper']}>
            <h2 {...scrollAttributesV2}>More Projects</h2>
            <div className={classes['more-projects__items']}>
              {moreProjectsData.map(project => (
                <Card
                  key={project.id}
                  id={project.id}
                  skills={project.skills}
                  projectLink={project.link}
                  description={project.description}
                  imgs={project.img}
                  alt={project.title}
                >
                  {project.title}
                </Card>
              ))}
            </div>
            <Link
              {...scrollAttributes}
              className={classes['project-btn']}
              to="/projects"
            >
              View All
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Project
