import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projectsData } from '../../data/projects'
import { scrollAttributes } from '../../data/scrollAtributes'
import classes from './Card.module.css'

export default function Card({ children, skills, imgs, alt, id }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    let media = window.matchMedia('(max-width: 800px)')
    if (media.matches) setIsMobile(true)
  }, [])

  const attributes = !isMobile && {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    onHoverStart: () => {
      setIsHover(true)
    },
    onHoverEnd: () => {
      setIsHover(false)
    },
  }

  const onClickHandler = () => {
    const clickedProject = projectsData.find(project => project.id === id)
    navigate(`/project:${clickedProject.id}`)
  }

  const blurVariants = !isMobile && {
    hide: {
      filter: 'brightness(1)',
      transition: { duration: 0.5 },
    },
    show: {
      filter: 'brightness(0.5)',
      transition: { duration: 0.5 },
    },
  }

  const variants = !isMobile && {
    hidden: {
      opacity: 0,
      scale: 0.7,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      scale: 1,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      {...scrollAttributes}
      {...attributes}
      className={classes.card}
      onClick={isMobile ? onClickHandler : undefined}
    >
      <picture>
        <source type="image/avif" srcSet={imgs.avif} />
        <source type="image/webp" srcSet={imgs.webp} />
        <source type="image/jpeg" srcSet={imgs.jpg} />
        <motion.img
          variants={blurVariants}
          initial="hide"
          animate={isHover ? 'show' : 'hide'}
          width={315}
          height={374}
          className={classes['project-image']}
          alt={alt}
          src={imgs.jpg}
        />
      </picture>
      {!isMobile && (
        <motion.button
          variants={variants}
          animate={isHover ? 'show' : 'hidden'}
          initial="hidden"
          className={classes['learn-more']}
          onClick={onClickHandler}
          aria-label="View more"
        >
          View
          <br />
          more
        </motion.button>
      )}
      <motion.div
        variants={blurVariants}
        initial="hide"
        animate={isHover ? 'show' : 'hide'}
        className={classes.description}
      >
        <h3>{children}</h3>
        <ul className={classes['skills__list']}>
          {skills.map(skill => (
            <li key={Math.random()}>{skill}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
