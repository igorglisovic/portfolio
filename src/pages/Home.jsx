import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Sections/Hero.jsx'
import AboutMe from '../components/Sections/AboutMe.jsx'
import Projects from '../components/Sections/Projects.jsx'
import Contact from '../components/Sections/Contact.jsx'
import SocialMedia from '../components/Overlays/SocialMedia.jsx'
import Loader from '../components/Overlays/Loader.jsx'
import Footer from '../components/Footer/Footer.jsx'

const Home = () => {
  const containerRef = useRef(null)
  const aboutMeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactMeRef = useRef(null)
  const heroRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 0.8,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {createPortal(<Loader />, document.getElementById('overlays'))}
        {createPortal(<SocialMedia />, document.getElementById('overlays'))}
        <Header
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          contactMeRef={contactMeRef}
          heroRef={heroRef}
        />
        <Hero ref={heroRef} />
        <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactMeRef} />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Home
