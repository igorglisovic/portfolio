import { Navigate, Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage.jsx'
import CvPage from './pages/CvPage.jsx'
import Home from './pages/Home.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  const str = `     _________
    / ======= \\
   /___________\\
  | ___________ |
  | |         | |
  | | HACKED! | |
  | |_________| |_____________
  \\_____________/            )
  / """"""""""" \\           /
 / ::::::::::::: \\      =D-'
(_________________)
`

  console.log(
    str,
    "\n  Hey there 👋, curious! \n   You're probably wondering how cool this site is.\n\n  If you think it's interesting and want to see the code behind it,\n   I've placed it in the open at https://github.com/igorglisovic/portfolio.\n   Feel free to check it out!\n\n  Also, you can contact me on https://www.linkedin.com/in/igor-glisovic/ or via contact@igorglisovic.com ✨."
  )

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
