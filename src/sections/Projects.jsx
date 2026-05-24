import { motion } from "framer-motion"

const projects = [
  {
    title: "Facial Recognition System",
    description:
      "Sistema de reconocimiento facial con Python, Tkinter y SQLite.",
  },

  {
    title: "Gaming Events Platform",
    description:
      "Aplicación Full Stack para creación y gestión de eventos gaming.",
  },

  {
    title: "Urban Pulse ETL",
    description:
      "Bodega de datos y procesos ETL para integración empresarial.",
  },
]

function Projects() {
  return (
    <section id="projects"className="py-32 bg-[#050505] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black text-center mb-20"
        >
          <span className="bg-gradient-to-r from-purple-400 to-green-400 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -15,
              }}
              className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-md p-8 hover:border-green-400 transition"
            >

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-green-500/10 to-purple-500/10" />

              <div className="relative z-10">

                <h3 className="text-3xl font-bold mb-6 text-green-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <button className="mt-8 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-semibold">
                  Ver Más
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects