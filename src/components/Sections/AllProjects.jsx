import classes from './AllProjects.module.css'
import { projectsData } from '../../data/projects'
import Container from '../UI/Container'
import Card from '../UI/Card'
import { scrollAttributes } from '../../data/scrollAtributes'

const AllProjects = () => {
  return (
    <section data-scroll-section className={classes.projects}>
      <Container>
        <div className={classes['projects-wrapper']}>
          <div className={classes['title']}>
            <h1 {...scrollAttributes}>All Projects</h1>
          </div>
          <div className={classes['card-wrapper']}>
            {projectsData.map(project => (
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
        </div>
      </Container>
    </section>
  )
}

export default AllProjects
