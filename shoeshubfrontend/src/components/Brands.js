import React from 'react'
import { useSelector } from 'react-redux'

export default function Brands() {
    let {brandList} =  useSelector(state=>state.brand.value)
  return (
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel vendor-carousel">
                    <div className="vendor-item border p-4">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fadidas%2F&psig=AOvVaw0Awe3pbqZ1kE1cK_HjUi7t&ust=1673592312167000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC066y3wfwCFQAAAAAdAAAAABAD" alt=""/>)
                    </div>
                    <div className="vendor-item border p-4">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fadidas%2F&psig=AOvVaw0Awe3pbqZ1kE1cK_HjUi7t&ust=1673592312167000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC066y3wfwCFQAAAAAdAAAAABAD" alt=""/>)
                    </div>
                    <div className="vendor-item border p-4">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fadidas%2F&psig=AOvVaw0Awe3pbqZ1kE1cK_HjUi7t&ust=1673592312167000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLC066y3wfwCFQAAAAAdAAAAABAD" alt=""/>)
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
