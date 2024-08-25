import Image from 'next/image'
import React from 'react'
const HeaderMenu = () => {
  return (
    <nav className="p-4 text-white">
        <div className='flex'>
        <div className='flex justify-start w-full items-center'>
            <Image src= "/Images/Logo.png" width={106} height={130} alt='logo'/>
            <div>
                <h3>Residence Seradi</h3>
            </div>
        </div>
      <ul className="flex space-x-4 justify-end w-full">
        <li><a href="#home" className="hover:text-gray-400">Accueil</a></li>
        <li><a href="#about" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#services" className="hover:text-gray-400">A Propos</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
        </div>
       
    </nav>
  )
}

export default HeaderMenu
