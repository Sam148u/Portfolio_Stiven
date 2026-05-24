import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/40 border-b border-green-500/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-black bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text">
          Stiven.dev
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <a href="#home">
            <li className="hover:text-green-400 transition cursor-pointer">
              Inicio
            </li>
          </a>

          <a href="#tech">
            <li className="hover:text-green-400 transition cursor-pointer">
              Tecnologías
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-green-400 transition cursor-pointer">
              Proyectos
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-green-400 transition cursor-pointer">
              Contacto
            </li>
          </a>

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-green-400"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-green-500/20 px-6 py-8">

          <ul className="flex flex-col gap-6 text-gray-300 text-lg font-medium">

            <a href="#home">
              <li>Inicio</li>
            </a>

            <a href="#tech">
              <li>Tecnologías</li>
            </a>

            <a href="#projects">
              <li>Proyectos</li>
            </a>

            <a href="#contact">
              <li>Contacto</li>
            </a>

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar