import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "./YprAY5Q9_400x400.jpg"

export const NavBar = () => {
  return (
    <nav>
     <Image src={Logo} width={30} quality={100} alt="logo" placeholder='blur'></Image>
     <h1>TicketMaster</h1>
     <Link href="/">Dashboard</Link>
     <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
