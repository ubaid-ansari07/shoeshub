import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Topbar from './components/Topbar'
import { fetchBrand } from './components/reduxconfig/brandSlice'
import { fetchProduct } from './components/reduxconfig/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddProduct from './components/AddProduct'
export default function App() {
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchBrand());
    dispatch(fetchProduct())
  },[])
  return (
    <>
    <AddProduct/>
      {/* <BrowserRouter>
          <Topbar/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter> */}
    </>
  )
}
