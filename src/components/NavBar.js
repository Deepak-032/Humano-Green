import React, { useState, useEffect } from 'react'
import './styles/NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const [y, setY] = useState(0)
    const toogleNav = () => setClick(!click)
    const closeNav = () => setClick(false)

    useEffect(() => {
        if (click) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
        function handleScroll() {
            if (!click) {
                if (y > window.scrollY)
                    document.getElementById("nav_style").classList.add("nav_style_changer_mobile")
                else if (y < window.scrollY)
                    document.getElementById("nav_style").classList.remove("nav_style_changer_mobile")
                setY(window.scrollY)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [click, y])

    return (
        <>
            <div className="navbar_container" id="nav_style">
                <div className="container">
                    <div className="navbar nav_mobile">
                        <a href="#">
                            <img
                                className="navbar_logo"
                                src="/assets/logo-02.png"
                                alt="logo"
                            />
                        </a>
                        <ul className={click ? "navbar_right active" : "navbar_right"}>
                            <li><a href="#about-us" onClick={closeNav} >ABOUT US</a></li>
                            <li><a href="#our-story" onClick={closeNav} >OUR STORY</a></li>
                            <li><a className="action_btn1" href='#contact-us' onClick={closeNav}>
                                CONTACT US
                            </a></li>
                        </ul>
                        <span onClick={toogleNav} className="hamburgerMenu d-none">{click ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
