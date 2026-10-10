import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Works } from './components/Works'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0d] font-sans text-white">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App
