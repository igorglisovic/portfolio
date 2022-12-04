import React from 'react'
import classes from './Hero.module.css'
import Container from '../UI/Container.jsx'
import personalImageWebp from '../../assets/igorglisovic.webp'
import personalImageJpg from '../../assets/igorglisovic.jpg'
import personalImageAvif from '../../assets/igorglisovic.avif'
import { motion } from 'framer-motion'

const Hero = React.forwardRef((_, ref) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 2, duration: 2.5, ease: 'easeInOut' },
    },
  }

  return (
    <section ref={ref} className={classes.hero} id="hero" data-scroll-section>
      <div className={classes['hero-bg__figures']}></div>
      <Container>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className={classes['hero-wrapper']}
        >
          <article className={classes['hero-article']}>
            <h1 data-scroll data-scroll-speed="1" data-scroll-delay="0.04">
              Frontend
              <br />
              Developer.
            </h1>
            <p
              className={classes['hero-paragraph']}
              data-scroll
              data-scroll-speed="1"
              data-scroll-delay="0.04"
            >
              I enjoy building beautiful, creative frontend products. Focused on
              developing intuitive experiences that constantly grow with a keen
              eye for creating engaging UI.
            </p>
            <p
              className={classes['hero-quote']}
              data-scroll
              data-scroll-speed="1"
              data-scroll-delay="0.08"
            >
              "Intuitive design is how I give the user new superpowers."
            </p>
          </article>
          <div
            className={classes['hero-personal__image']}
            data-scroll
            data-scroll-speed="0.8"
            data-scroll-delay="0.04"
          >
            <picture>
              <source type="image/avif" srcSet={personalImageAvif} />
              <source type="image/webp" srcSet={personalImageWebp} />
              <source type="image/jpeg" srcSet={personalImageJpg} />
              <img
                alt="Igor Glisovic Frontend Developer"
                width={330}
                height={330}
                src={personalImageJpg}
              />
            </picture>
          </div>
        </motion.div>
      </Container>
    </section>
  )
})

export default Hero
