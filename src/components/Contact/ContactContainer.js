import React, {Component} from 'react'
import {Consumer} from "../../context";
import '../../sass/_contactContainer.scss'

class ContactContainer extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className={value.isFormOpen ? 'contact-wrap-container -show' : 'contact-wrap-container'}>
                            <div className="contact-container">
                                <div className="contact-form">
                                    <div className="filter-main-title">
                                    <span>
                                        Contact Us
                                    </span>
                                    </div>
                                    <form action="">
                                        <div className="contact-form__name form-input">
                                            <input className='contact-form__name-first' type="text"
                                                   placeholder='First Name'/>
                                            <input type="text" placeholder='Last Name'/>
                                        </div>
                                        <div className="contact-form__company form-input">
                                            <input type="text" placeholder='Company'/>
                                        </div>
                                        <div className="contact-form__email form-input">
                                            <input type="text" placeholder='Email'/>
                                        </div>
                                        <div className="contact-form__phone form-input">
                                            <input type="text" placeholder='Phone'/>
                                        </div>
                                        <div className="contact-form__message form-input-area">
                                            <textarea placeholder='Message' name="" id="" rows="10"></textarea>
                                        </div>
                                        <div className="contact-form__tick">
                                            <input type="checkbox"/>
                                            <p>
                                                Please tick this box if you would like our advertising team to send you
                                                further information about our marketing solutions and client events by
                                                email. For more information please see our privacy policy.
                                            </p>
                                        </div>
                                        <div className="contact-form__submit">
                                            <button>Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="contact-contact-underlay" onClick={value.handleFormClose}></div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default ContactContainer