import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 bg-black/75 border-t border-green-500/20 relative"
    >

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text">
          Let's Build Something
        </h2>

        <p className="text-gray-400 mb-10">
          Disponible para proyectos, colaboraciones y oportunidades.
        </p>

        <div className="flex justify-center gap-8 text-3xl">

          <a
            href="#"
            className="text-gray-400 hover:text-green-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

        </div>

        <p className="mt-12 text-gray-600 text-sm">
          © 2026 Stiven.dev — Full Stack Developer
        </p>

      </div>
    </footer>
  )
}

export default Footer
