import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import './styles/Dropdown.css'

function Dropdown({ heading, children, bgColor, containerClassName, headingClassName, open = false }) {
    const [state, setState] = useState(open)

    return (
        <div className={containerClassName} style={{ backgroundColor: bgColor }}>
            <h2
                className={`dropdown_heading d-flex justify-content-between align-items-center ${headingClassName}`}
                onClick={() => setState(!state)}
            >
                {heading}
                {state ?
                    <FiChevronUp size={38} /> :
                    <FiChevronDown size={38} />
                }
            </h2>
            <div className={`dropdown font14 ${state ? 'show_dropdown' : 'hide_dropdown'}`}>{children}</div>
        </div>
    )
}

export default Dropdown