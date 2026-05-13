import { useState, useEffect } from 'react'
import BentoLayout from './components/BentoLayout.jsx'
import WheelLayout from './components/WheelLayout.jsx'
import TerminalLayout from './components/TerminalLayout.jsx'

const LAYOUTS = [
  { id: 'bento', label: 'Bento' },
  { id: 'wheel', label: 'Wheel' },
  { id: 'terminal', label: 'Terminal' },
]

const MOBILE_BREAKPOINT = 768

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}

function App() {
  const isMobile = useIsMobile()
  const [override, setOverride] = useState(null)

  // The effective layout: override wins, otherwise responsive default
  const defaultLayout = isMobile ? 'wheel' : 'bento'
  const activeLayout = override || defaultLayout

  // Clear override when the screen crosses the breakpoint so it
  // naturally snaps back to the responsive default
  useEffect(() => {
    setOverride(null)
  }, [isMobile])

  return (
    <>
      {/* Fixed nav bar */}
      <nav className="layout-nav">
        {LAYOUTS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setOverride(id)}
            className={`layout-nav__btn ${
              activeLayout === id ? 'layout-nav__btn--active' : ''
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Layout content */}
      <div className="layout-content">
        {activeLayout === 'bento' && <BentoLayout />}
        {activeLayout === 'wheel' && <WheelLayout />}
        {activeLayout === 'terminal' && <TerminalLayout />}
      </div>
    </>
  )
}

export default App
