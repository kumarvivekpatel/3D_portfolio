// Most Important Section Of this portfolio -- 3d-Image  

import  { motion } from 'framer-motion'; 

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    // Through this class we see a new classic background
    <section className="relative w-full h-screen mx-auto">
      {/* This div is for the text about us */}
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center  items-center  mt-5 ">

        {/* This div class is for slider circle/dot*/}
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        {/* This dic class is for slider line  */}
        <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className="text-[#915eff]">Vivek</span></h1>
          {/* in this write about us */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Lorem ipsum dolor sit amet<br className="sm:block hidden" /> consectetur, adipisicing elit. Assumenda, laborum.
          </p>
        </div>
      </div>

        {/* Rendering Computer Canvas */}
        <ComputersCanvas />

        {/* FOR SLIDER JUST AFTER 3D COMPUTER - TO GO DOWN */}

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
        {/* WE make a circle that jumps up and down */}
            <motion.dev 
            animate={{y:[0, 24, 0]}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"


            />

            </div>

          </a>

        </div>

    </section>
    
  )
}

export default Hero