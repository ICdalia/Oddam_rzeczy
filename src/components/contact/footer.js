import React from "react";
import "../stylesContact.scss"
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";

const Footer= () => {
    return (
        <div className="container_contact_footer">
            <p className="text_footer">Copyright by Coders Lab</p>
            <div className="container_image">
                <img src={Facebook} alt="facebook" className="image_footer"/>
                <img src={Instagram} alt="instagram" className="image_footer"/>
            </div>
        </div>

    )
};

export default Footer;