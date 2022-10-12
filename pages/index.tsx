import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { About } from './components/about'
import Header from './components/header'
import JsonData from './data/data.json'

import styled from 'styled-components'
import { motion } from 'framer-motion'

const BoxStyled = styled(motion.div)`display: flex`;

const Home: NextPage = () => {
  const [landingPageData, setLandingPageData] = useState({About:{}});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header />
      <BoxStyled
        style={{x:-200}}
        animate={{
          x:0
        }}
        transition={{duration:0.3}}
  >
      <About data={landingPageData.About} />
    </BoxStyled> 
  </div>
  )
}

export default Home
