import { useState } from 'react'
import Dropdown from "./Dropdown";


const options =[
    {
        label:'Choose option',
        value:""
    },
    {
        label:'I need to change my order',
        value:"change"
    },
    {
        label:"What's my order status",
        value:'status'
    },
    {
        label:'I need help with my subscription',
        value:'subscription'
    },
    
]
const ContactInfo =()=> {
    const[selected,setSelected] = useState(options[0]);
    
        return(
            <div >
                <form className="ui form error">
                    <div className="two fields">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Your Name"    />
                        </div>
                        <div className="field">
                            <label>Surname</label>
                            <input type="text" name="surname" placeholder=" Your Surname"    />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>*Email Adsress</label>
                            <input type="text" name="address" placeholder="Email address"    />
                        </div>
                        <div className="field">
                            <label>Phone Number</label>
                            <input type="number" name="phone" placeholder=" Phone number"    />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>*Reason for contact</label>
                            <Dropdown
                                options={options}
                                selected={selected}
                                onSelectChange={setSelected}
                                
                            />
                        </div>
                        <div className="field">
                            <label>Order number</label>
                            <input type="number" name="order" placeholder="Order number"    />
                        </div>
                    </div>
                    <div className='field'>
                    <h1 style={{fontSize:"2em"}}>Additional Details</h1>
                    <textarea></textarea>
                    </div>
                    <br/>
                    <br/>
                    <button className="fluid ui positive button">Send</button>
                </form>
            </div>)
}



export default ContactInfo;