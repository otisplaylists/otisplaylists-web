import { useState, useEffect } from 'react'
import BentoLayout from './components/BentoLayout.jsx'
import WheelLayout from './components/WheelLayout.jsx'
import TerminalLayout from './components/TerminalLayout.jsx'
import OrbitLayout from './components/OrbitLayout.jsx'
import CassetteLayout from './components/CassetteLayout.jsx'
import HomeLayout from './components/HomeLayout.jsx'

const LAYOUTS = [
  { id: 'home', label: 'Home' },
  { id: 'bento', label: 'Bento' },
  { id: 'wheel', label: 'Wheel' },
  { id: 'orbit', label: 'Orbit' },
  { id: 'cassette', label: 'Cassette' },
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
  const defaultLayout = isMobile ? 'home' : 'home'
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
        {activeLayout === 'home' && <HomeLayout />}
        {activeLayout === 'bento' && <BentoLayout />}
        {activeLayout === 'wheel' && <WheelLayout />}
        {activeLayout === 'terminal' && <TerminalLayout />}
        {activeLayout === 'orbit' && <OrbitLayout />}
        {activeLayout === 'cassette' && <CassetteLayout />}
      </div>
    </>
  )
}

export default App
