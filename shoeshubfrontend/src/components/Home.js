import React from 'react'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Products from '../components/Products'
import Subscribe from '../components/Subscribe'
import Topbar from '../components/Topbar'
import Brands from './Brands'

export default function Home() {
  return (
    <>
    <Featured/>
    <Offer/>
    <Products/>
    {/* <Brands/> */}
    <Subscribe/>
    </>
  )
}
