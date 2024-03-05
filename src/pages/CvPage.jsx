import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Loader from '../components/Overlays/Loader'
import Cv from '../components/Sections/Cv'

const CvPage = () => {
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
      <main className="project" data-scroll-container ref={containerRef}>
        {createPortal(<Loader />, document.getElementById('overlays'))}
        <Header />
        <Cv />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default CvPage
