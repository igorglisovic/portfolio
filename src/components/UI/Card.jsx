import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projectsData } from '../../data/projects'
import { scrollAttributes } from '../../data/scrollAtributes'
import classes from './Card.module.css'

export default function Card({ children, skills, imgs, alt, id }) {
  const [isMobile, setIsMobile] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    let media = window.matchMedia('(max-width: 800px)')
    if (media.matches) setIsMobile(true)
  }, [])

  const attributes = !isMobile
    ? {
        whileHover: { scale: 1.05 },
      }
    : ''

  const onClickHandler = () => {
    const clickedProject = projectsData.find(project => project.id === id)
    navigate(`/project:${clickedProject.id}`)
  }

  return (
    <motion.div
      {...scrollAttributes}
      {...attributes}
      onClick={onClickHandler}
      className={classes.card}
    >
      <picture>
        <source type="image/avif" srcSet={imgs.avif} />
        <source type="image/webp" srcSet={imgs.webp} />
        <source type="image/jpeg" srcSet={imgs.jpg} />
        <img
          width={315}
          height={374}
          className={classes['project-image']}
          alt={alt}
          src={imgs.jpg}
        />
      </picture>
      <div className={classes.description}>
        <h3>{children}</h3>
        <ul className={classes['skills__list']}>
          {skills.map(skill => (
            <li key={Math.random()}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
