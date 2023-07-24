import React from 'react'
import './styles/About.css'

const owners = [
    {
        n: "Vishal Garg",
        i: "./assets/vishal.png",
        d: "Over the course of his career, Vishal has demonstrated excellent leadership qualities and sharp intellect in the corrugation and food industries. As a Mechanical Engineering graduate from a reputable college in Bangalore, he invested his vision in this amazing business endeavor to achieve his entrepreneurial goals."
    },
    {
        n: "Sarush Garg",
        i: "./assets/sarush.png",
        d: "With the strong background in the industry and prestigious degrees from Symbiosis International University in BBA degree in IT and Télécom Ecole de Management, Paris awarded him a diploma in IT Risk Management, worked in the tissue paper industry, logistics, and hygiene industry for over 6 years. which makes him a dynamic and visionary team member."
    },
    {
        n: "Sarang Garg",
        i: "./assets/sarang.png",
        d: "An Electronics and Communications engineer from NIT Trichy, Sarang also has over 6 years of remarkable experience in the IT and hygiene industry. He is a technocrat focused on streamlining the operations of the company to ensure its steady and swift functioning."
    },
]

function About() {
    return (
        <>
            <div id='about-us' className='container pt_max'>
                <div className='text-center mb-5'>
                    <h2>About Humano</h2>
                    <h6 className='text_green'>Know us Better</h6>
                </div>
                <p className='col-lg-9 text-center ms-auto me-auto'>As part of the Humano brand, "HUMANO" stands for humanity's constant desire to feel fulfilled and to embrace
                    life every day. To elevate your everyday self-care experience, Humano brings you closer to nature and her proven powers
                    of self-care. The people behind this company are passionate young entrepreneurs who are committed to bringing you the
                    best in everyday needs products. In just a few years since we began our journey in 2018, we have won hearts in 8 different Indian states
                    - from Jammu & Kashmir to Maharashtra. Now that our services have gained so much attention, we want to explore international
                    markets and meet the needs of people all over the world. We have developed a variety of brands over the last four years,
                    which have been very well received by our customers for their high quality!</p>
                {/* Forebearers */}
                <div className='text-center mt-5'>
                    <h2>Forebearers</h2>
                    <h6 className='text_green mb_max'>of this change</h6>
                    <div className='row'>
                        {owners.map(o => (
                            <div className='col-12 col-lg-4 position-relative owner_container'>
                                <img className='owner_image' src={o.i} alt='' />
                                <div className='bg_green text-white p-5 h-100'>
                                    <div className='p-2 p-lg-0' />
                                    <h2 className='pt_max'>{o.n}</h2>
                                    <div
                                        className='ms-lg-auto me-lg-auto mb-4'
                                        style={{ borderBottom: "3px solid var(--lGreen)", width: "6rem" }}
                                    ></div>
                                    <p className='mb-0'>{o.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* What We Serve */}
            </div>
            <div className='mt_max' style={{ backgroundColor: "var(--lGreen)", maxHeight: window.innerWidth <= 991 ? "auto" : "460px" }}>
                <div className='container pt-5 pb-5 pb-lg-0'>
                    <div className='row flex-wrap-reverse'>
                        <div className='col-12 col-lg-6 text-white'>
                            <h2 className='mb-5'>What We Serve</h2>
                            <p className='col-lg-9'>In addition to Hygiene, Cosmetics, Food, and Pharma,
                                Humano Green fulfills your needs across 4 categories. We
                                believe that catering to your needs in these areas in our way will
                                help you look after yourselves better and bless you with lots of
                                sighs of contentment. Across all of these divisions, Humano
                                Green combines top- quality ingredients extracted from nature
                                with the experience of our team. Not only do we strive to satisfy
                                your needs, but also create a memorable experience that
                                boosts your overall quality of life.
                            </p>
                        </div>
                        <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
                            <img style={{ maxHeight: "549px", objectFit: "cover" }} className='w-100' src={'./assets/whatweserve.jpg'} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About