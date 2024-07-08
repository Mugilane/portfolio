import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import MyService from './components/MyService/MyService'
// import MyProject from './components/MyProject/MyProject'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './index.css'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <MyService/>
      {/* <MyProject/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App