import Header from './Header'
import Footer from './Footer'
import BackToTopButton from './BackToTopButton'
import { useEffect } from 'react'

type Props = { children: React.ReactNode }

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
