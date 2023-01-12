import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export default function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState(1);
    const [desc, setDesc] = useState("");
    const [first, setfirst] = useState("")
    let {brandList} = useSelector(state=>state.brand.value)
    const save = ()=>{

    }
  return (
    <div className='container my-5'>
        <div className='form-group'>
            <select className='form-select'>
                <option value="">Select Brand</option>
                {brandList.map((brand,index)=><option key={index} value={brand._id}>{brand.brandName}</option>)}
            </select>
        </div>
        <div className='form-group'>
         <input className='form-control' placeholder='Product Name..'></input>
        </div>
        <div className='form-group'>
         <input className='form-control' placeholder='Product Price..'></input>
        </div>
        <div className='form-group'>
         <input className='form-control' placeholder='Product Qty...'></input>
        </div>
        <div className='form-group'>
         <textarea className='form-control' placeholder='Product Description...'></textarea>
        </div>
        <div className='form-group'>
         <input type="file" multiple className='form-control'></input>
        </div>
        <div className='form-group'>
            <div className='row'>
                <div className='col-md-2'><b>Sizes</b></div>
                <div className='col-md-1'>
                    <input type="checkbox" className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>7</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>8</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>9</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>10</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>11</small>
                </div>
            </div>
        </div>
        <div className='form-group'>
         <input className='form-control' placeholder='Color'></input>
        </div>
        <div className='form-group'>
         <input className='form-control' placeholder='Discount'></input>
        </div>
        <button onClick={save} className='btn btn-primary'>Save</button>
    </div>
  )
}
