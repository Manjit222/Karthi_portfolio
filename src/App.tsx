import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0d] font-sans text-white">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
