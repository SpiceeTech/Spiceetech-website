import { About } from './components/About'
import { Contact } from './components/Contact'
import { FeaturedApp } from './components/FeaturedApp'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedApp />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
