import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navigation } from "../components/navigation/navigation"
import { Hero } from '../components/hero/hero'

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  )
}
