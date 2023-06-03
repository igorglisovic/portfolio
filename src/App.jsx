import { Navigate, Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage.jsx'
import CvPage from './pages/CvPage.jsx'
import Home from './pages/Home.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project:projectId" element={<ProjectPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/notfound" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
  )
}

export default App
