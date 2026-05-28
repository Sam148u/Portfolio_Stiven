import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import TechStack from "./sections/TechStack"
import Projects from "./sections/Projects"
import Footer from "./components/Footer"
import CyberpunkBackground from "./components/CyberpunkBackground"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-24">
      <CyberpunkBackground />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
