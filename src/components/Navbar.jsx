import { useCallback, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"

const NAV_ITEMS = [
  { href: "#home", label: "Inicio" },
  { href: "#tech", label: "Tecnologias" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const { scrollY } = useScroll()

  const closeMobileMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    if (!menuOpen) {
      setShowNavbar(true)
    }

    setMenuOpen((isOpen) => !isOpen)
  }, [menuOpen])

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    if (menuOpen) return

    const previousScrollY = scrollY.getPrevious() ?? 0
    const scrollDifference = currentScrollY - previousScrollY
    const isNearTop = currentScrollY < 24
    const hasMeaningfulScroll = Math.abs(scrollDifference) > 8

    if (isNearTop) {
      setShowNavbar((isVisible) => (isVisible ? isVisible : true))
      return
    }

    if (!hasMeaningfulScroll) return

    if (scrollDifference > 0 && currentScrollY > 120) {
      setShowNavbar((isVisible) => (isVisible ? false : isVisible))
      return
    }

    if (scrollDifference < 0) {
      setShowNavbar((isVisible) => (isVisible ? isVisible : true))
    }
  })

  return (
    <motion.nav
      initial={{ y: -96, opacity: 0 }}
      animate={{
        y: showNavbar ? 0 : -112,
        opacity: showNavbar ? 1 : 0,
      }}
      style={{ x: "-50%" }}
      transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.7 }}
      className="!fixed top-4 left-1/2 w-[95%] max-w-7xl z-50 overflow-hidden rounded-2xl border border-green-500/25 bg-black/45 shadow-[0_0_28px_rgba(34,197,94,0.16),0_0_60px_rgba(168,85,247,0.1)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-purple-500/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />

      <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Stiven.dev logo"
            className="h-12 w-12 object-contain drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]"
          />

          <h1 className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-xl font-black text-transparent sm:text-2xl">
            Stiven.dev
          </h1>
        </div>

        <ul className="hidden gap-8 text-gray-300 md:flex font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-200 hover:text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.25)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={toggleMobileMenu}
          className="text-3xl text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.75)] md:hidden"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className="md:hidden"
      >
        <div className="relative rounded-b-2xl border-t border-green-500/20 bg-black/95 px-6 py-7 backdrop-blur-lg">
          <ul className="flex flex-col gap-5 text-lg font-medium text-gray-300">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block transition-colors duration-200 hover:text-green-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
