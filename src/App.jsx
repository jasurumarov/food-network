import './scss/style.scss'
import AnimCursor from "./components/animCursor/AnimCursor"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Features from './components/features/Features'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Test from './components/test/Test'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <AnimCursor/>
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <Menu/>
      <Test/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
