import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import About from './pages/about'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Footer from './components/footer'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/about" element={ <About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
