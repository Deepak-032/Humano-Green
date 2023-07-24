import React from 'react'
import Dropdown from './Dropdown'

const products = [
    {
        p: "Industrial Liner Bags",
        i: "/assets/industriallinerbags.jpg",
        d: "Humano’s industrial liner bags are best for storing and packaging a variety of products. Our qualitative range of liner bags provide extra protection to their constituents against air and humidity. They are 100% compostable and friendly for the environment!",
        f: ["Light-weight", "Leakage proof", "Safe to consume for animals", "Wear and tear resistant", "Environment-friendly"],
        u: ["Household purposes", "Solid waste management", "Daily use", "Storing air and humidity resistant constituents"]
    },
    {
        p: "Bio Compostable Films",
        i: "/assets/compostiblenurserybag.jpg",
        d: "Humano Green products introduces an environmentally friendly solution to the global plastics problem, without compromising the user experience or requiring a shift in consumer behaviour. Unlike other plastic replacements products, the Humano Green products are most Sustainable, Ocean safe alternative to Plastic that lasts for hours, not centuries.",
        f: ["100% safe for environment", "Disintegrates into earth and leaves no residue", "Ranges from 35 to 120 micron", "Environment-friendly"],
        u: ["Packaging Material", "Base Material For Embroidery, Wigs", "Laundry Sheets & Clothing", "Film For Tree Planting & Seeding"]
    },
    {
        p: "Garbage Bags",
        i: "/assets/garbagebags.jpg",
        d: "Humano Green garbage bags come in different colours and sizes for all kinds of garbage disposals. They conform to ISI7088 and have been certified by CPCB. Try out Humano’s 100% compostable garbage bags for your garbage disposal needs!",
        f: ["Complimented with pleasant aromas", "Doubly sealed for enhanced holding capacity", "Available in various colours and sizes", "Free of toxins and chemicals", "6 months shelf life", "Environment-friendly"],
        u: ["Industrial garbage disposal", "Household garbage disposal", "Food waste disposal",]
    },
    {
        p: "Shopping Bags",
        i: "/assets/shoppingbag.jpg",
        d: "The Humano Shopping Bags have been designed to fuel your convenience while being mindful and considerate about the environment. Switch to our 100% compostable shopping bags to make better choices for yourselves and mother nature!",
        f: ["100% biocompostable", "Environment-friendly", "Toxin and chemical-free"],
        u: ["Industrial purposes", "Supermarket visits", "Household chores", "Restaurants and hotels"]
    }
]

function OurProducts() {
    return (
        <div className='container mt_max'>
            <div className='text-center'>
                <h2>Our Products</h2>
                <h6 className='text_green'>Industry's most sustainable</h6>
            </div>
            {products.map(e => (
                <div id={e.p.toLowerCase().split(' ').join('-')} className='row flex-wrap-reverse pt-5'>
                    <div className='col-12 col-lg-6'>
                        <div className='col-lg-10'>
                            <h2 className='text_green mb-5'>{e.p}</h2>
                            <p className='mb-5'>{e.d}</p>
                            <Dropdown
                                heading="Features"
                                headingClassName="text_green"
                                containerClassName="border-bottom border-secondary pb-2"
                            >
                                <div className='changed_li'>
                                    {e.f.map(f => <li>{f}</li>)}
                                </div>
                            </Dropdown>
                            <Dropdown
                                heading="Uses"
                                headingClassName="text_green"
                                containerClassName="border-bottom border-secondary pb-2 mt-3"
                            >
                                <div className='changed_li'>
                                    {e.u.map(u => <li>{u}</li>)}
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-5 mb-lg-0'>
                        <div style={{ minHeight: "340px" }}><img className='w-100' src={e.i} alt='' /></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurProducts