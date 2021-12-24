import { useState } from "react";
import Dropdown from "./Dropdown";

const options =[
    {
        label:'Select amount',
        value:" "
    },
    {
        label:'$25',
        value:"25"
    },
    {
        label:'$50',
        value:'50'
    },{
        label:'$75',
        value:'75'
    },{
        label:'$150',
        value:'150'
    },{
        label:'$200',
        value:'200'
    },
]
const GiftCard =()=>{
    const[selected,setSelected] = useState(options[0]);
    return (
        <div className="ui container">
            <div className="ui vertical segment" >
                <div className="ui left aligned grid">
                    <div className="left aligned two column row">
                        <div className="column">
                            <img className="ui big image" src="../assets/card.jpg" alt="gift"/>
                        </div>
                        <div className="column">
                            <h1 style={{fontSize:'5em',fontFamily:'Times New Roman, Times, serif'}}>Gift Card</h1>   
                            <h3 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>$25</h3>
                            <Dropdown
                            options={options}
                            selected={selected}
                            onSelectChange={setSelected}
                            />            
                            <div className="ui divided items">
                                <div class="item">
                                    <div className="ui tiny image">
                                    <strong>Details</strong>
                                    </div>
                                    <div className="middle aligned content">
                                    Give the gift of their choosing with a Digital Gift Card. You determine how the new plant parent receives their gift: delivered directly to their email inbox, a link for you to share with them or as a print out. All methods include instructions on how to redeem. No additional processing or shipping fees
                                    </div>
                                    </div>
                                </div>
                                <button className="ui fluid teal button">Gift</button>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCard;