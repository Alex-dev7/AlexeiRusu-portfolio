import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import './index.scss'
import ContactForm from './components/Contact/ContactForm'
import Footer from './components/Footer/Footer'

function App({pageProps, router}) {
  

  return (
    <div

    
    className="App">
      <Nav />
      <Header />
      <Bio />
      <Projects  />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
