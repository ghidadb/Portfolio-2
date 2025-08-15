import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'

// Lazy load pages
const Project1 = lazy(() => import('./pages/Project1'))
const Project2 = lazy(() => import('./pages/Project2'))

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="page-loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
