import Image from 'next/image'
import styles from '../../styles/components/navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className="container navbar navbar-expand my-3">
      <ul className="navbar-nav mx-auto">
        <li className={"nav-item pt-4 mx-2 " + styles.nav}>
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className={"nav-item pt-4 mx-2 " + styles.nav}>
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className={"nav-item pt-4 mx-2 " + styles.nav}>
          <a className="nav-link"href="#">
            Services
          </a>
        </li>
        <a href="#" className="navbar-brand mx-3">
          <Image
            src="/assets/images/logo/logo.png"
            width={60}
            height={60}
          />
        </a>
        <li className={"nav-item pt-4 mx-2 " + styles.nav}>
          <a className="nav-link" href="#">
            Shop
          </a>
        </li>
        <li className={"nav-item pt-4 mx-2 " + styles.nav}>
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li className={"nav-item pt-4 mx-2 " + styles.nav}>
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}