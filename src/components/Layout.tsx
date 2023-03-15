import { ReactNode } from 'react'
import Navbar from './NavBar'

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}