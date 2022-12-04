import React, { useRef, useState } from 'react'
import Container from '../UI/Container.jsx'
import classes from './Contact.module.css'
import emailjs from 'emailjs-com'
import { scrollAttributesV2 } from '../../data/scrollAtributes.js'

const Contact = React.forwardRef((_, ref) => {
  const [submited, setSubmited] = useState(false)

  const formRef = useRef()
  const inputName = useRef()
  const inputEmail = useRef()
  const textarea = useRef()

  const sendEmail = e => {
    e.preventDefault()

    if (
      inputName.current.value === '' ||
      inputEmail.current.value === '' ||
      textarea.current.value === ''
    ) {
      alert('Please fill in all fields!')
      return
    }

    if (textarea.current.value.length < 20) {
      alert('The message must contain more than 20 characters!')
      return
    }

    emailjs
      .sendForm(
        'service_erysgzg',
        'template_pmdwird',
        formRef.current,
        'I_JeOrI32X7cMuw0o'
      )
      .then(
        result => {},
        error => {}
      )

    setSubmited(true)
  }
  return (
    <section
      ref={ref}
      className={classes.contact}
      id="contact"
      data-scroll-section
    >
      <Container>
        <div className={classes['title']}>
          <h2 {...scrollAttributesV2}>Send me a message</h2>
          <span {...scrollAttributesV2}>Feel free to contact me</span>
        </div>
        {submited ? (
          <h3 className={classes.submited}>Message sent successfully.</h3>
        ) : (
          <form
            data-scroll
            data-scroll-class="loading-active"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className={classes['form-wrapper']}>
              <div className={classes['name-email']}>
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    ref={inputName}
                  />
                </div>
                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    ref={inputEmail}
                  />
                </div>
              </div>
              <div className={classes.message}>
                <label htmlFor="subject">Your message</label>
                <textarea
                  placeholder="Enter your message"
                  rows="1"
                  name="subject"
                  id="subject"
                  ref={textarea}
                ></textarea>
              </div>
            </div>
            <button
              data-scroll
              data-scroll-class="loading-active"
              data-scroll-speed="0.3"
              data-scroll-delay="0.04"
              className={classes.btn}
              type="submit"
            >
              Send message
            </button>
          </form>
        )}
      </Container>
    </section>
  )
})

export default Contact
