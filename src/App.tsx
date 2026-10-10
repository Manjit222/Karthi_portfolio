import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skeleton } from './components/Skeleton'
import { SocialMediaWorks } from './components/SocialMediaWorks'
import { Works } from './components/Works'

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, 2000))
    Promise.race([document.fonts.ready, timeout]).then(() => setReady(true))
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0d] font-sans text-white">
      <Skeleton visible={!ready} />
      <Navbar />
      <Hero ready={ready} />
      <About />
      <Works />
      <SocialMediaWorks />
      <Experience />
      <Footer />
    </div>
  )
}

export default App
