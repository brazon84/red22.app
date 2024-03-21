import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Informacion from './components/informacion/Informacion'
import Nav from './components/nav/Nav'
import Nosotros from './components/nosotros/Nosotros'
import Planes from './components/planes/Planes'


function App() {
  

  return (
    <div className='bg-rose-900'>
    <Nav  />  
    <Home />
    {/* <Nosotros /> */}
    <Planes />   
     {/*
    <Informacion />
    <Contact />
    <Footer /> */}
    {/* <div className='formato'>
    <h1 className='construccion text-center mt-72 bx-flashing'>pagina en construccion disculpe las molestias ocacionadas</h1>
    </div> */}
    
    </div>
  )
}

export default App
