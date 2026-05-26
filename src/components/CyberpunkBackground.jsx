const dataColumns = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  delay: `${-(index % 9) * 0.7}s`,
  duration: `${7 + (index % 5)}s`,
}))

function CyberpunkBackground() {
  return (
    <div className="cyberpunk-bg" aria-hidden="true">
      <div className="cyberpunk-bg__grid" />
      <div className="cyberpunk-bg__scanlines" />
      <div className="cyberpunk-bg__vignette" />

      <div className="cyberpunk-bg__beam cyberpunk-bg__beam--green" />
      <div className="cyberpunk-bg__beam cyberpunk-bg__beam--purple" />
      <div className="cyberpunk-bg__beam cyberpunk-bg__beam--violet" />

      <div className="cyberpunk-bg__light cyberpunk-bg__light--top" />
      <div className="cyberpunk-bg__light cyberpunk-bg__light--bottom" />

      <div className="cyberpunk-bg__data-rain">
        {dataColumns.map((column) => (
          <span
            key={column.id}
            style={{
              left: column.left,
              animationDelay: column.delay,
              animationDuration: column.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default CyberpunkBackground
