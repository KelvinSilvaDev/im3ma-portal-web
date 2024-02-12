'use client'
import { AlignJustify, Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const navLinks = [
  {
    title: 'Igrejas',
    url: '#'
  },
  {
    title: 'ID',
    url: '#'
  },
  {
    title: 'Células',
    url: '#'
  },
  {
    title: 'Eventos',
    url: '#'
  },
  {
    title: 'Como tudo iniciou',
    url: '#'
  }
]

const NavMenu = () => {
  return (
    <nav className="flex h-full md:h-auto justify-around items-evenly flex-col md:flex-row md:justify-start lg:justify-evenly lg:w-full xl:w-10/12 gap-2 md:px-6">
      {
        navLinks.map((link, index) => (
          <a key={index} href={link.url} className="flex justify-center items-center text-white text-lg font-bold md:text-sm md:font-light w-full md:w-auto px-8 md:px-0 h-14 py-4 md:py-0 md:h-auto md:gap-0">{link.title}</a>
        ))
      }
    </nav>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="bg-[#1f1f1f] w-full">
      <div className="container flex justify-evenly items-center md:px-8 relative mx-auto">
          <Image src="/mema_nome_branco.png" alt="logo" width={112} height={48} />
        <div className="hidden md:block w-full">
          <NavMenu />
        </div>
        <button className="bg-blue-600 text-white rounded-md py-2 px-6 w-56">FAÇA SEU LOGIN</button>
        <AlignJustify onClick={handleMenu} className={`${isOpen ? 'hidden' : 'block'} block md:hidden`} />
        {
          isOpen && (
            <div className="flex flex-col md:hidden absolute w-full h-screen top-0 left-0 bg-[#1f1f1f] items-center justify-center">
              <Plus onClick={handleMenu} className="absolute top-4 right-4 rotate-45" />
              <NavMenu />
            </div>
          )
        }
      </div>
    </header>
  )
}