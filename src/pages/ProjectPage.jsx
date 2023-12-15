import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useParams } from 'react-router-dom'
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Loader from '../components/Overlays/Loader'
import Project from '../components/Sections/Project'

const ProjectPage = () => {
  const containerRef = useRef(null)
  const params = useParams()

  const location = useLocation()

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 0.8,
      }}
      watch={[location]}
      containerRef={containerRef}
      key={Math.random()}
    >
      <main className="project" data-scroll-container ref={containerRef}>
        {createPortal(<Loader />, document.getElementById('overlays'))}
        <Header />
        <Project projectId={params.projectId.slice(1)} />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default ProjectPage
