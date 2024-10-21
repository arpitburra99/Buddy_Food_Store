import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ContactUs from '../../components/ContactUs/ContactUs'
import AboutUs from '../../components/AboutUs/AboutUs'

const Home = () => {

  const [category, setCategory] = useState('All')

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AboutUs />
      <AppDownload />
      <ContactUs />
    </div>
  )
}

export default Home