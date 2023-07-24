import React from 'react'
import './styles/Intro.css'

const nonBio = [
    { i: "./icons/warning.png", t: "Ecologically hazardous" },
    { i: "./icons/oil-barrel.png", t: "Products made from petroleum like plastic" },
    { i: "./icons/co2.png", t: "Carbon dioxide emissions are harmful" },
]
const bio = [
    { i: "./icons/waterdrop.png", t: "Dissolves/disintegrates slowly" },
    { i: "./icons/co2.png", t: "Reduces carbon emissions and is non-toxic" },
    { i: "./icons/warning.png", t: "Ecologically dangerous and costly" },
]
const comp = [
    { i: "./icons/recycle.png", t: "Reduces the need for recycling" },
    { i: "./icons/profit.png", t: "Effective in terms of cost" },
    { i: "./icons/planet-earth.png", t: "Ecosystem-friendly" },
]

const features = [
    { i: "./icons/biodegradable.png", t: "Biocompostable" },
    { i: "./icons/compostable.png", t: "Environment Friendly" },
    { i: "./icons/save-the-planet.png", t: "Sustainable" },
    { i: "./icons/money.png", t: "Cost Efficient" },
    { i: "./icons/quality.png", t: "Recommended" },
    { i: "./icons/toxin.png", t: "Toxin Free" },
    { i: "./icons/love.png", t: "Safe for Animals" },
    { i: "./icons/bpa-free.png", t: "BPA Free" },

]

function Intro() {

    return (
        <>
            <div className='position-relative'>
                <div className='container mt_max'>
                    <div className='row flex-wrap-reverse'>
                        <div className='col-12 col-lg-7 mt-5 mt-lg-0'>
                            <div className='main_heading'>
                                <span>Step into the valuable<br /></span><span style={{ color: "var(--dGreen)" }}>Biocompostable<br />Sanctuary</span>
                            </div>
                            <div className='mt-4 mt-lg-5 fw-bold col-lg-8'>
                                With cutting-edge technology and high-quality
                                standards, we create considerate goods that will
                                improve your experience while reducing your
                                environmental impact.
                            </div>
                            <div className='mt-4 mt-lg-5'>
                                <a href='#contact-us' className='action_btn1 me-3'>CONTACT US</a>
                                <a href='#our-story' className='action_btn2'>OUR STORY</a>
                            </div>
                        </div>
                        <div className='col-12 col-lg'>
                            <img className='hero_image' src={"./assets/herosection.jpg"} alt='' />
                            <div className='box1'></div>
                            <div className='box2'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt_max pt_max container-fluid p_mobile_0'>
                <div className='text-center mb-5'>
                    <h2>Why Switch to Humano</h2>
                    <h6 className='text_green'>Let us tell you why</h6>
                </div>
                <div className='row'>
                    <div className='col-12 col-lg  p-lg-5 p-4 pt-5 pb-5 bg_green'>
                        <h2 className='text-white mb-5'>Non-Biodegradable</h2>
                        {nonBio.map((e, i) => (
                            <div className={`d-flex align-items-center ${i !== 2 && 'mb-4'}`}>
                                <span className='bg-white icon_wrap me-3'>
                                    <img className='w-100' src={e.i} alt='' />
                                </span>
                                <span className='text-white'>{e.t}</span>
                            </div>
                        ))}
                    </div>
                    <div className='col-12 col-lg p-lg-5 p-4 pt-5 pb-5 bg_green separation'>
                        <h2 className='text-white mb-5'>Biodegradable</h2>
                        {bio.map((e, i) => (
                            <div className={`d-flex align-items-center ${i !== 2 && 'mb-4'}`}>
                                <span className='bg-white icon_wrap me-3'>
                                    <img className='w-100' src={e.i} alt='' />
                                </span>
                                <span className='text-white'>{e.t}</span>
                            </div>
                        ))}
                    </div>
                    <div className='col-12 col-lg p-lg-5 p-4 pt-5 pb-5 bg_green'>
                        <h2 className='text-white mb-5'>Biocompostable</h2>
                        {comp.map((e, i) => (
                            <div className={`d-flex align-items-center ${i !== 2 && 'mb-4'}`}>
                                <span className='bg-white icon_wrap me-3'>
                                    <img className='w-100' src={e.i} alt='' />
                                </span>
                                <span className='text-white'>{e.t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt_max' style={{ backgroundColor: "var(--sapGreen)", maxHeight: `${window.innerWidth <= 991 ? '658px' : ''}` }}>
                <div className='container pt-5 pb-5 position-relative'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div style={{ color: "var(--lGreen)", fontSize: "13rem", lineHeight: 1, maxHeight: "66px" }}>"</div>
                            <h2 className='text-white lh-base ms-5 me-5 me-lg-0 mb-0'>Plastic Pollution has become a major issue that is endangering our environment, health and economies</h2>
                            <div className='text-lg-center text-end' style={{ color: "var(--lGreen)", fontSize: "13rem", lineHeight: 1, maxHeight: "56px" }}>"</div>
                        </div>
                        <div className='col-lg'>
                            <img className='plant_image' src={'./assets/plant.png'} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt_max'>
                <h2 className='text-center mb-5'>Key Features</h2>
                <div className='row'>
                    {features.map(e => (
                        <div className='col-6 col-lg-3 mb-lg-4 mb-3'>
                            <div className='p-2 p-lg-4 bg-white rounded'>
                                <div className='m-lg-5 m-4 mb-lg-4 mt-lg-4 bg_green rounded-circle p-4'>
                                    <img className='w-100' src={e.i} alt={e.t} />
                                </div>
                                <h5 className='text-center text_green'>100%</h5>
                                <h5 className='text-center'>{e.t}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Intro