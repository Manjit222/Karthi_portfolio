import { useEffect, useState } from 'react'
import karthikeyan from './assets/karthikeyan.png'
import manjitNaskar from './assets/manjit-naskar.png'
import ahasaHealth from './assets/works/ahasa-health.png'
import allCottonAndLinen from './assets/works/all-cotton-and-linen.png'
import spaceMarvelAnalyze from './assets/works/space-marvel-analyze.png'
import spaceMarvelProducts from './assets/works/space-marvel-products.png'
import travelfika from './assets/works/travelfika.png'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skeleton } from './components/Skeleton'
import { Works } from './components/Works'

const PRELOAD_IMAGES = [
  karthikeyan,
  manjitNaskar,
  spaceMarvelAnalyze,
  spaceMarvelProducts,
  travelfika,
  allCottonAndLinen,
  ahasaHealth,
]

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, 6000))
    const assets = Promise.all([document.fonts.ready, ...PRELOAD_IMAGES.map(preloadImage)])
    Promise.race([assets, timeout]).then(() => setReady(true))
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0d] font-sans text-white">
      <Skeleton visible={!ready} />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App
