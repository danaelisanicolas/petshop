import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../styles/components/navigation.module.scss'

export const Navigation = () => {
  return (
    <Navbar className="justify-content-center align-bottom my-3">
      <Nav>
        <Nav.Item className="pt-4 mx-2">
          <Nav.Link href="#">
            <a className={styles.nav}>Home</a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="pt-4 mx-2">
          <Nav.Link>
            <a className={styles.nav}>About</a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="pt-4 mx-2">
          <Nav.Link>
            <a className={styles.nav}>Services</a>
          </Nav.Link>
        </Nav.Item>
        <NavbarBrand href="#" className="mx-3">
          <Image
            src="/assets/images/logo/logo.png"
            width={60}
            height={60}
          />
        </NavbarBrand>
        <Nav.Item className="pt-4 mx-2">
          <Nav.Link>
            <a className={styles.nav}>Shop</a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="pt-4 mx-2">
          <Nav.Link>
            <a className={styles.nav}>Blog</a>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="pt-4 mx-2">
          <Nav.Link>
            <a className={styles.nav}>Contact</a>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}