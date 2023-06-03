import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../UI/Container'
import classes from './NotFound.module.css'

const NotFound = () => {
  return (
    <section data-scroll-section className={classes.notfound}>
      <Container>
        <h1>Page Not Found.</h1>
        <button className={classes.btn}>
          <Link to="/">Back to home</Link>
        </button>
      </Container>
    </section>
  )
}

export default NotFound
