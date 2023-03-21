import React from 'react'
import Veggie from '../Components/Veggie'
import Popular from '../Components/Popular'
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div
     animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.6}}
    >

        <Veggie />
        <Popular />
    </motion.div>
  )
}

export default Home