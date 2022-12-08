import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Loader from '../components/Overlays/Loader'
import NotFound from '../components/Sections/NotFound'

const NotFoundPage = () => {
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
      <main data-scroll-container ref={containerRef}>
        {createPortal(<Loader />, document.getElementById('overlays'))}
        <Header />
        <NotFound />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default NotFoundPage
