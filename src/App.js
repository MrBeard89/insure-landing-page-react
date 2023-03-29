import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Advert from './components/Advert'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Header />
        <About />
        <Advert />
        <Footer />
      </Router>
    </div>
  )
}

export default App
