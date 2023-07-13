import React from "react";
import "../stylesContact.scss"
import ContactForm from "./contactForm";
import Decoration from "../../assets/Decoration.svg";
import Footer from "./footer";


const ContactSection = () => {
    return (
        <div className="container_contact" id="contact">
            <div className="contact_form">
                <div className="title_contactform">Skontaktuj się z nami</div>
                <div className="decoration_contact">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                <ContactForm/>
                <Footer/>
            </div>

        </div>
    )
};

export default ContactSection;