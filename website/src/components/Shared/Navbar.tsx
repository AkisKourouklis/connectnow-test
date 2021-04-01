import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: FC = () => {
  const [active, setActive] = useState<'/' | '/contact'>('/')
  const router = useRouter()

  const setActiveClass = (): void => {
    if (router.pathname === '/') {
      setActive('/')
    } else {
      setActive('/contact')
    }
  }

  useEffect(() => {
    setActiveClass()
  })

  return (
    <header className="navbar">
      <Link href="/">
        <a>
          <p className={`navbar__link1 ${active === '/' ? 'navbar__link1--active' : null}`}>
            Video Games
          </p>
        </a>
      </Link>

      <Link href="/contact">
        <a>
          <p className={`navbar__link2 ${active === '/contact' ? 'navbar__link2--active' : null}`}>
            Contact
          </p>
        </a>
      </Link>
    </header>
  )
}

export default Navbar
