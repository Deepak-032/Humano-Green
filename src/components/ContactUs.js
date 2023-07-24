import React, { useRef, useEffect, useReducer, useState } from 'react'
import './styles/ContactUs.css'
import axios from 'axios'

const initialState = {
    // name: '',
    email: '',
    _subject: 'Humano Green Customer',
    message: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            const { name, value } = action.payload
            return { ...state, [name]: value, }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function ContactUs() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [submitting, setSubmitting] = useState(false)

    const submit = e => {
        e.preventDefault()
        setSubmitting(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.post('https://formsubmit.co/ajax/709f2fe6118c127f7d91d5a391fae1ed', state)
            .then(() => {
                alert("Your response has been submitted, Thank you!")
                setSubmitting(false)
                dispatch({ type: 'RESET' })
            })
            .catch(() => alert("Your response has not been submitted, please try again."))
    }

    return (
        <div id='contact-us' className='container mt_max pt_max'>
            <div className='bg-white position-relative'>
                <div className='row contact_form_padding align-items-center'>
                    <div className="col-12 col-lg-6">
                        <h2>Contact Us</h2>
                        <form className='col-lg-11' onSubmit={submit} method="POST">
                            {/* <input type="text" value={state.name} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="name" placeholder="Name" required /> */}
                            <input type="email" value={state.email} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="email" placeholder="Email" required />
                            <input type="hidden" name="_captcha" value="false" />
                            <textarea value={state.message} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="message" placeholder="Your Message" required />
                            <button type="submit" className="action_btn1 w-100">{submitting ? "Submitting..." : "Submit"}</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        <img
                            className="contact_image w-100"
                            src={"./assets/contactform.jpg"}
                            alt=""
                        />
                    </div>
                    <div className='box1_contact_form'></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
