import { motion } from "framer-motion"

const techCategories = [
  {
    title: "Frontend",
    techs: [
      "React",
      "Angular",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "TailwindCSS",
    ],
  },

  {
    title: "Backend",
    techs: [
      "Node.js",
      "Python",
      "C#",
    ],
  },

  {
    title: "Databases",
    techs: [
      "MySQL",
      "SQLite",
    ],
  },

  {
    title: "Tools",
    techs: [
      "Git",
      "GitHub",
      "Docker",
      "Excel",
    ],
  },

]

function TechStack() {
  return (
    <section
      id="tech"
      className="py-32 bg-black/60 text-white relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black mb-24 text-center"
        >
          <span className="bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </motion.h2>

        {/* Categories */}

        <div className="space-y-16">

          {techCategories.map((category, categoryIndex) => (

            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >

              {/* Category Title */}

              <h3 className="text-3xl font-black mb-8 text-green-400">
                {category.title}
              </h3>

              {/* Tech Cards */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {category.techs.map((tech, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                    }}
                    className="bg-white/5 border border-green-500/20 backdrop-blur-md rounded-2xl p-6 text-center hover:border-purple-400 transition duration-300 shadow-[0_0_20px_rgba(34,197,94,0.12)]"
                  >

                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {tech}
                    </h4>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default TechStack