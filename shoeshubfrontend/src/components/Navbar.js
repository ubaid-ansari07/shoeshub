import React from 'react'
import { Link } from 'react-router-dom'
import Crousel from './Crousel'

export default function Navbar() {
  return (
    <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
            <div className="col-lg-9 m-auto">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="products" className="nav-item nav-link">Products</Link>
                            <Link to="about" className="nav-item nav-link">About Us</Link>
                            <Link to="contact" className="nav-item nav-link">Contact</Link>
                            <Link to="admin" className="nav-item nav-link">Admin</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <a href="" className="nav-item nav-link">Login</a>
                            <a href="" className="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </nav>
                <Crousel/>
            </div>
        </div>
    </div>
  )
}
