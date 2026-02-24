import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Alex_in_Dominoz from '../assets/Dominoz_Suggu.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id='hero' className='flex items-center min-h-screen px-6'>
      <div className='max-w-6xl w-full grid md:grid-cols-2 mx-auto gap-10 items-center'>
        <div className='text-left'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
            <span className='block'>Hey!</span>
            <span className='block text-violet-500'>I'm Alex McDominey</span>
          </h1>

          <p className='text-gray-400 text-lg mb-6'>
            <Typewriter 
              words={[
                "Full-stack-developer",
                "Competitive Programmer",
                "Problem Solver",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <div className='flex gap-6 text-2xl'>
              <a href='https://github.com/Alex-Techy60' target='_blank' className='hover:text-violet-400'><FaGithub /></a>
              <a href='https://www.linkedin.com/in/sugyan-singh' target='_blank' className='hover:text-violet-400'><FaLinkedin /></a>
          </div>
          <div className='mt-10 grid grid-cols-3 gap-6 max-w-md'>
              {[
                { value: "50+", label: "Contests"},
                { value: "10+", label: "Projects"},
                { value: "∞", label: "Sleepless Nights"},
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 1, delay: index * 0.2}}
                  viewport={{ once: true }}
                  className='bg-[#161028] p-6 rounded-xl text-center shadow-lg border border-violet-900 hover:border-violet-400 hover:bg-[#20124b] transition'
                >
                  <h3 className='text-2xl font-bold text-violet-400'>
                    {item.value}
                  </h3>
                  <p className='text-gray-400 mt-1 text-sm'>
                    {item.label}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <img
          src={Alex_in_Dominoz}
          alt='Sugyan Singh'
          className='h-96 w-80 object-cover rounded-2xl shadow-[0_0_40px_rgba(124,58,237,0.5)]'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero