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
