import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Loader from '../components/Overlays/Loader.jsx'
import AllProjects from '../components/Sections/AllProjects.jsx'

const Projects = () => {
  const containerRef = useRef()

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 0.8,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main className="projects" data-scroll-container ref={containerRef}>
        {createPortal(<Loader />, document.getElementById('overlays'))}
        <Header />
        <AllProjects />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Projects
