import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App