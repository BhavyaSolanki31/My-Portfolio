import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, navGroup, profile } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const sectionIds = Object.keys(navGroup)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const current = useActiveSection(sectionIds)
  const active = navGroup[current]

  const headerRef = useRef(null)
  const listRef = useRef(null)
  const linkRefs = useRef({})
  const [ind, setInd] = useState({ x: 0, w: 0, on: false })
  const [glide, setGlide] = useState(false) // false for the very first placement, so it doesn't slide in from x=0

  // Elevation once scrolled, plus a reading-progress line. Progress is written straight to a
  // CSS variable (no re-render per scroll event).
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      headerRef.current?.style.setProperty('--p', max > 0 ? Math.min(1, y / max).toFixed(4) : '0')
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // The active-section indicator glides under the current link. It is measured, so it stays
  // correct after the font loads or the window is resized.
  useLayoutEffect(() => {
    const place = () => {
      const list = listRef.current
      const el = active ? linkRefs.current[active] : null
      const r = el?.getBoundingClientRect()
      if (!list || !r || !r.width) {
        setInd((p) => (p.on ? { ...p, on: false } : p))
        return
      }
      const u = list.getBoundingClientRect()
      setInd({ x: r.left - u.left + 10, w: Math.max(0, r.width - 20), on: true })
    }
    place()
    const ro = new ResizeObserver(place)
    if (listRef.current) ro.observe(listRef.current)
    document.fonts?.ready.then(place)
    return () => ro.disconnect()
  }, [active])

  useEffect(() => {
    if (!ind.on || glide) return
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setGlide(true)))
    return () => cancelAnimationFrame(id)
  }, [ind.on, glide])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = (id) =>
    `nav-link inline-block rounded-md px-2.5 py-2 text-center text-[0.95rem] transition-colors duration-200 ${
      active === id ? 'font-semibold text-primary' : 'text-ink hover:text-primary'
    }`
  const setRef = (id) => (el) => {
    linkRefs.current[id] = el
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        open
          ? 'border-line bg-page'
          : scrolled
            ? 'border-line bg-page/85 shadow-[0_6px_20px_-14px_rgb(0_0_0/0.35)] backdrop-blur-md'
            : 'border-transparent bg-page'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" onClick={() => setOpen(false)} aria-label="Bhavya Solanki, home" className="whitespace-nowrap font-sign text-[1.85rem] leading-none text-primary">
          <span className="font-sans text-xl font-light text-sub">&lt; </span>
          Bhavya Solanki
          <span className="font-sans text-xl font-light text-sub"> /&gt;</span>
        </a>

        <div className="relative hidden xl:block">
          <ul ref={listRef} className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  ref={setRef(item.id)}
                  href={`#${item.id}`}
                  data-label={item.label}
                  className={link(item.id)}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download="Bhavya_Solanki_Resume.pdf" data-label="Resume" className={link('resume')}>
                Resume
              </a>
            </li>
            <li>
              <a
                ref={setRef('contact')}
                href="#contact"
                data-label="Contact Me"
                className={link('contact')}
                aria-current={active === 'contact' ? 'true' : undefined}
              >
                Contact Me
              </a>
            </li>
          </ul>
          <span
            aria-hidden="true"
            className="nav-indicator pointer-events-none absolute bottom-0.5 left-0 h-[2px] rounded-full bg-primary"
            style={{
              width: ind.w,
              transform: `translateX(${ind.x}px)`,
              opacity: ind.on ? 1 : 0,
              transition: glide ? undefined : 'none',
            }}
          />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 rounded-md p-2 text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="menu-in max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-page xl:hidden"
      >
        <ul className="mx-auto max-w-[1400px] px-5 py-2 sm:px-8">
          {[...navItems, { id: 'contact', label: 'Contact Me' }].map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-line py-3.5 text-lg ${active === item.id ? 'font-semibold text-primary' : 'text-ink'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ '--i': navItems.length + 1 }}>
            <a
              href={profile.resume}
              download="Bhavya_Solanki_Resume.pdf"
              onClick={() => setOpen(false)}
              className="block py-3.5 text-lg text-ink"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      <span aria-hidden="true" className="scroll-progress" />
    </header>
  )
}
