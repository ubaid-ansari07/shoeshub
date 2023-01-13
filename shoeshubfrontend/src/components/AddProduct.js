import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import WebApis from './Web/WebApis';
import WebService from './Web/WebService';

export default function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState(1);
    const [desc, setDesc] = useState("");
    const [brandId,setBrandId] = useState();
    const [color,setColor] = useState();
    const [discount,setDiscount] = useState();
    const [sizes,setSizes] = useState([]);
    const [img,setImg] = useState([]);
    const {brandList} = useSelector(state=>state.brand.value)
    const save = async ()=>{
        let formData = new FormData();
        formData.append('img',img);
        formData.set('brandId',brandId)
        formData.set('productName',name);
        formData.set('productPrice',price);
        formData.set('productQty',qty);
        formData.set('productDescription',desc);
        formData.set("productColor",color);
        formData.set("productDiscount",discount);
        formData.set("productSize",[...sizes]);
        formData.set("productOffer",[]);
        formData.set("productComments",[]);
        formData.set("productSold",[]);
        formData.set("date",new Date());

        console.log(formData);
        try {
            // await axios.post("http://localhost:8000/product/add",{newProduct:formData})
            await WebService.postApi(WebApis.ADD_PRODUCTS,formData);
        } catch (error) {
            console.log(error);
        }
    }
    const images = (e)=>{
        setImg([...img,e.target.files[0],e.target.files[1],e.target.files[2]]);
    }
    const size = (e)=>{
        let {value,checked} = e.target;
        if(checked)
        setSizes([...sizes,value]);
        else
        setSizes(sizes.filter(size=>size!==value));
    }
  return (
    <div className='container my-5'>
        <div className='form-group'>
            <select onChange={(e)=>setBrandId(e.target.value)} className='form-select'>
                <option value="">Select Brand</option>
                {brandList.map((brand,index)=><option key={index} value={brand._id}>{brand.brandName}</option>)}
            </select>
        </div>
        <div className='form-group'>
         <input className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='Product Name..'></input>
        </div>
        <div className='form-group'>
         <input className='form-control' onChange={(e)=>setPrice(e.target.value)} placeholder='Product Price..'></input>
        </div>
        <div className='form-group'>
         <input className='form-control' onChange={(e)=>setQty(e.target.value)} placeholder='Product Qty...'></input>
        </div>
        <div className='form-group'>
         <textarea className='form-control' onChange={(e)=>setDesc(e.target.value)} placeholder='Product Description...'></textarea>
        </div>
        <div className='form-group'>
         <input type="file" onChange={images} multiple className='form-control'></input>
        </div>
        <div className='form-group'>
            <div className='row'>
                <div className='col-md-2'><b>Sizes</b></div>
                <div className='col-md-1'>
                    <input type="checkbox" value={7} onChange={size} className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>7</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" value={8} onChange={size} className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>8</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" value={9} onChange={size} className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>9</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" value={10} onChange={size} className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>10</small>
                </div>
                <div className='col-md-1'>
                    <input type="checkbox" value={11} onChange={size} className='form-check-input'></input>
                </div>
                <div className='col-md-1'>
                    <small>11</small>
                </div>
            </div>
        </div>
        <div className='form-group'>
         <input className='form-control' onChange={(e)=>setColor(e.target.value)} placeholder='Color'></input>
        </div>
        <div className='form-group'>
         <input className='form-control' onChange={(e)=>setDiscount(e.target.value)} placeholder='Discount'></input>
        </div>
        <button onClick={save} className='btn btn-primary'>Save</button>
    </div>
  )
}
