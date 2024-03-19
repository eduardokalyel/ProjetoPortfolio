import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Presentation from './Presentation'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Presentation/>
        <Projects/>
        <AboutMe/>
        <Footer/>
      </div>
    </>
  )
}

export default App
