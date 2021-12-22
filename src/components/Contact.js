import ContactInfo from "./ContactInfo";


const Contact =()=>{
    return(
        <div className="ui container">
        <div className="ui vertical segment " >
        <div className="ui left aligned grid">
                    <div className="left aligned two column row">
                        <div className="column">
                                <div className="ui left aligned header">
                                    <h1 style={{fontSize:"4em"}}>Get in touch.</h1>
                                </div>
                                <p>Our team is full of passionate plant parents ready to help. For the speediest reply, please fill out this quick form. This ensures we have what’s needed to help you as soon as possible!</p>
                                <br/>
                                <p>Please allow our Customer Happiness team (Chrissy, Anna, Paris and Andie!) up to two business days to reach out. Add info@thesill.com to your contacts to ensure our responses land in your inbox, not your spam folder.</p>
                                <br/>
                                <p>Reminder: If your plant arrives with cold damage due to shipping carrier delays (shipping live plants this time of year can be challenging!), please let us know so we can make it right.</p>
                                <br/>
                                <p>For in-store inquiries, please reach out to your local shop directly.</p>
                                <img className="ui medium image" src="../assets/contact-cover.jpg" alt="cover"/>
                        </div>
                        <div className="column">
                                <div className="ui left aligned header">
                                    <h1 style={{fontSize:"2em"}}>Contact Information</h1>
                                </div>
                                <div className="ui form">
                                    <ContactInfo/>
                                </div>
                        </div>
                    </div>
                        
                </div>
        </div>
    </div>)
        
    
    
};

export default Contact;