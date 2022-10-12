import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Team } from './components/team'
import JsonData from './data/data.json'

const Home: NextPage = () => {
  const [landingPageData, setLandingPageData] = useState({Team:{}});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Team data={landingPageData.Team} />
  )
}

export default Home
