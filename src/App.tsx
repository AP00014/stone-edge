import { useEffect, lazy, Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/main.css'

// Components
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop'
const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Services = lazy(() => import('./components/Services/Services'))
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const ProjectDetail = lazy(() => import('./components/Projects/ProjectDetail'))

// Animations
import initAllAnimations from './utils/animations'

function App() {
  useEffect(() => {
    // Initialize animations when component mounts
    initAllAnimations()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Testimonials />
              <Contact />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/services" element={
            <Layout>
              <Services />
            </Layout>
          } />
          <Route path="/testimonials" element={
            <Layout>
              <Testimonials />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="/projects" element={
            <Layout>
              <Projects />
            </Layout>
          } />
          <Route path="/projects/:id" element={
            <Layout>
              <ProjectDetail />
            </Layout>
          } />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
