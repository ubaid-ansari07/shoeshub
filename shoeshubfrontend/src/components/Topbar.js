import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from './reduxconfig/productSlice'
export default function Topbar() {
    let dispatch = useDispatch();
    const change = (e)=>{
        dispatch(search(e.target.value))
    }
  return (
    <div className="container-fluid">
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input onChange={change} type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <a href="" className="btn border">
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge">0</span>
                </a>
                <a href="" className="btn border">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge">0</span>
                </a>
            </div>
        </div>
    </div>
  )
}
