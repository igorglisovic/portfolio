import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../UI/Container'
import classes from './Blog.module.css'

const Blog = () => {
  return (
    <section data-scroll-section className={classes.blog}>
      <Container>
        <h1>Coming soon.</h1>
        <button className={classes.btn}>
          <Link to="/">Back to home</Link>
        </button>
      </Container>
    </section>
  )
}

export default Blog
