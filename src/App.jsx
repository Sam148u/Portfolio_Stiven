import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import TechStack from "./sections/TechStack"
import Projects from "./sections/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  )
}

export default App