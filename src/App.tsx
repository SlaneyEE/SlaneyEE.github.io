import Navbar from './components/navbar'
import { About } from './components/about'
import { Footer } from './components/footer'
import { Games } from './components/games'
import { Oss } from './components/oss'
import { Hero } from './components/hero'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero/>
        <About />
        <Games />
        <Oss />
      </main>
      <Footer />
    </>
  )
}

export default App
