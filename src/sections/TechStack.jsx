import { motion } from "framer-motion"

const techs = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Python",
  "TailwindCSS",
  "Git",
  "Angular",
]

function TechStack() {
  return (
    <section  id="tech" className="py-32 bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black mb-20 text-center"
        >
          <span className="bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-white/5 border border-green-500/20 backdrop-blur-md rounded-3xl p-8 text-center hover:border-green-400 transition shadow-[0_0_20px_rgba(34,197,94,0.15)]"
            >
              <h3 className="text-2xl font-bold text-green-400">
                {tech}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default TechStack