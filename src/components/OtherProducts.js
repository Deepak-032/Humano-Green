import React from 'react'

const products = [
    { i: '/assets/compostibleagromulchfilmroll.jpg', t: 'Compostable Agro Mulch Film Roll'},
    { i: '/assets/tiffinsheet.jpg', t: 'Tiffin Sheet'},
    { i: '/assets/vegetablebag.jpg', t: 'Fruit and Vegetable Bag'},
    { i: '/assets/carrybag.jpg', t: 'Carry Bag'},
    { i: '/assets/bagsonroll.jpg', t: 'Bags on Roll'},
    { i: '/assets/laundrybag.jpg', t: 'Laundry Bag'},
]

function OtherProducts() {
    return (
        <div className='container mt_max'>
            <div className='text-center mb-5'>
                <h2>Other Products</h2>
            </div>
            <div className='row'>
                {products.map(p => (
                    <div className={`col-6 col-lg-4 mb-5`}>
                        <img style={{ minHeight: "160px" }} className='w-100 mb-4 rounded' src={p.i} alt='' />
                        <h2 className='text_green text-center ms-2 me-2'>{p.t}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherProducts