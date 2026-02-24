import React from 'react'

function Navbar() {
  return (
    <header className='fixed top-0 w-full bg-[#0f0a1f]/80 background-blur border-b border-violet-900 z-50'>
        <nav className='max-w-6xl mx-auto flex justify-between items-center px-6 py-4'>
            <h1 className='font-semibold text-lg'>Sugyan Singh</h1>
            <div className='text-sm space-x-6'>
                <a href='#hero' className='hover:text-violet-400'>Home</a>
                <a href='#about' className='hover:text-violet-400'>About</a>
                <a href='#tect' className='hover:text-violet-400'>Tech Stack</a>
                <a href='#projects' className='hover:text-violet-400'>Projects</a>
                <a href='#experience' className='hover:text-violet-400'>Experience</a>
                <a href='#contact' className='hover:text-violet-400'>Contact Me</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar