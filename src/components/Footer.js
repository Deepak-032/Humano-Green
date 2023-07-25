import React from 'react'
import './styles/Footer.css'

function Footer() {
    return (
        <>
            <footer className="main_footer mt_max pb-3">
                <div className="container">
                    <div className='d-inline-block mb-4'>
                        <a href="#">
                            <img
                                className="footer_logo"
                                src={"./assets/logo-01.png"}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="footer row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <h6 className="footer_headings">About Company</h6>
                            <div className='mb-4 footer_para'>
                                At Humano Green, we believe that the health
                                of mankind is inextricably tied to the nature of
                                our surroundings. Both our physical and
                                mental wellbeing are shaped by our
                                environment. We provide 100% biocompostable
                                solutions to standard petroleum-based plastic
                                shopping bags, which we once thought were
                                our allies.
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Social Media Links</h6>
                            <div><a href=""><i className="bi bi-instagram social_icon"></i>Instagram</a></div>
                            <div><a href=""><i className="bi bi-facebook social_icon"></i>Facebook</a></div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Products</h6>
                            <div><a href="#industrial-liner-bags">Industrial Liner Bags</a></div>
                            <div><a href="#bio-compostable-films">Bio Compostable Films</a></div>
                            <div><a href="#garbage-bags">Garbage Bags</a></div>
                            <div><a href="#shopping-bags">Shopping Bags</a></div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h6 className="footer_headings">Contact Us</h6>
                            <div>export@humano.in</div>
                            <div>vishal2garg@gmail.com</div>
                            <div>+919915010797</div>
                            <div>+917986545600</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
