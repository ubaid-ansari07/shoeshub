import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const {productList} = useSelector(state=>state.product.value);
    let navigate = useNavigate();
    const detail = (e,product)=>{
        e.preventDefault()
        navigate('/product/details',{state:{product}})
    }
  return (
    <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {productList.map((product,index)=><div key={index} className="col-md-2 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid" style={{width:'100%',height:'25vh'}} src={"/images/"+product.productImages[0]} alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{product.productName}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${product.productPrice}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0" onClick={(e)=>detail(e,product)} ><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}
