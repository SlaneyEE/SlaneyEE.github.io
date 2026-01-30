import Navbar from './components/navbar'
import { About } from './components/about'
import { Footer } from './components/footer'
import { Games } from './components/games'
import { Oss } from './components/oss'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <img
          src="/img/slaney-ee.png"
          alt="Slaney EE logo"
          className="m-auto w-1/3"
        />
        <About />
        <Games />
        <Oss />
      </main>
      <Footer />
    </>
  )
}

export default App
