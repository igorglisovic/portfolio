import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card.jsx'
import Container from '../UI/Container.jsx'
import classes from './Projects.module.css'
import { featuredProjectsData } from '../../data/projects'
import { scrollAttributes } from '../../data/scrollAtributes.js'

const Projects = React.forwardRef((_, ref) => {
  const [mediaMatches, setMediaMatches] = useState(false)

  let media = window.matchMedia('(max-width: 1150px)')

  let featuredProjects = [...featuredProjectsData]

  useEffect(() => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }
    window.addEventListener('resize', () => {
      if (media.matches) {
        setMediaMatches(true)
      } else {
        setMediaMatches(false)
      }
    })
  }, [])

  if (mediaMatches) {
    featuredProjects.pop()
  }

  if (!mediaMatches) {
    featuredProjects = [...featuredProjectsData]
  }

  return (
    <section
      ref={ref}
      className={classes.projects}
      id="projects"
      data-scroll-section
    >
      <Container>
        <div className={classes['project-wrapper']}>
          <svg
            width="207"
            height="1100"
            viewBox="0 0 207 1100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classes['bg-line']}
          >
            <path
              d="M1 1C90.3285 53.6667 253.417 205.8 191.145 393C113.304 627 15.8551 744.5 206 1087"
              stroke="#ffd300"
            />
          </svg>
          <div className={classes['title']}>
            <h2 {...scrollAttributes}>Projects</h2>
          </div>
          <div className={classes['card-wrapper']}>
            {featuredProjects.map(project => (
              <Card
                key={project.id}
                id={project.id}
                skills={project.skills.slice(0, 4)}
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
  )
})

export default Projects
