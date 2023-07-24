import React from 'react'
import './styles/OurStory.css'

function OurStory() {
    return (
        <>
            <div id='our-story' className='position-relative'>
                <div className='container pt_max'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
                            <h2>Our Story</h2>
                            <h6 className='text_green'>Envisioning that Humanity’s Health</h6>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <p>Humano has a team of competent entrepreneurs from various
                                backgrounds, which culminates in a distinct vision for our firm.
                                Humano's team members' combined efforts, as well as their
                                desire for constant innovation, have contributed considerably to the
                                company's success in the field of biocompostable plastic. Our team is
                                dedicated to overcoming obstacles and maximizing their adaptability
                                in order to offer everyday care solutions that are not only functional
                                but also biocompostable.</p>
                            <p className='d-lg-none'>As a small firm that began operations in 2018 , we have already
                                established a devoted following in eight Indian states . Our services
                                have been so well received that we are keen to expand into foreign
                                areas and provide consumers what they want.</p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-lg-6'>
                            <h2 className='col-8 lh-base text-white'>Making biocompostable Plastics an Everyday Reality</h2>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <p className='d-none d-lg-block'>As a small firm that began operations in 2018 , we have already
                                established a devoted following in eight Indian states . Our services
                                have been so well received that we are keen to expand into foreign
                                areas and provide consumers what they want.</p>
                        </div>
                    </div>

                    <div className='box1_our_story'></div>
                    <div className='col-lg-10 mt_max pt-3 pt-lg-0 ps-lg-5 bg_green'>
                        <img className='w-100 ps-lg-4' src={'./assets/ourstory.jpg'} alt='' />
                    </div>

                    <div className='row justify-content-end pt-4 pb-5'>
                        <div className='col-lg-6'>
                            <div style={{ color: "var(--lGreen)", fontSize: "13rem", lineHeight: 1, maxHeight: "66px" }}>"</div>
                            <h2 className='lh-base ms-3 ms-lg-5 mb-0 fst-italic col-lg-9'>We are here to help mankind by revolutionizing biocompostable products</h2>
                            <div className='text-end' style={{ color: "var(--lGreen)", fontSize: "13rem", lineHeight: 1, maxHeight: "56px" }}>"</div>
                        </div>
                        <div className='box2_our_story'></div>
                    </div>
                </div>
            </div>

            {/* another section */}
            <div className='container-fluid mt_max p_mobile_0'>
                <div className='row'>
                    <div className='col-12 col-lg-6 p-0'>
                        <div className='d-flex flex-column h-100'>
                            <img className='w-100' src={'./assets/plant2.jpg'} alt='' />
                            <div className='bg_green p-lg-5 p-4 flex-fill d-flex align-items-center'>
                                <h2 className='col-lg-9 text-white ms-auto me-auto'>Completely safe for environment</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 p-0'>
                        <div className='d-flex flex-lg-column h-100 flex-column-reverse'>
                            <div className='d-flex flex-column justify-content-center bg_green p-lg-5 p-4 text-white flex-fill'>
                                <h2 className='lh-sm mb-4'>What makes Humano Green's biocompostable Plastic Bags better?</h2>
                                <p className='mb-0'>biocompostable plastic bags made by Humano Green can turn into soil in under a month.</p>
                                <p>They pose no damage to the environment. Our bags are created from biomass, hence truly sustainable</p>
                            </div>
                            <img className='w-100' src={'./assets/sheetbanner.jpg'} alt='' />
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 p-0'>
                        <div className='d-flex flex-column h-100'>
                            <img className='w-100' src={'./assets/shoppingbagbanner.jpg'} alt='' />
                            <div className='bg_green p-lg-5 p-4 p-lg-4 flex-fill d-flex align-items-center'>
                                <h2 className='text-white'>Highly Sustainable</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory