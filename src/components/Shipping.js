import Accordion from "./Accordion";

const items =[
    {
        title:"When can I expect my  order to ship?",
        content:"This is a plant parent judgement-free zone. Every plant from The Mononoke comes with direct access to digital Care Library and our team of houseplant experts to answer any questions you might have. From where to put your plant,to how to care for it, we're here to help."
    },
    {
        title:"What is I need to change my order?",
        content:"We currently ship plants and plant supplies within the the contiguous US to all 48 states."
    },
    {
        title:"Can i get same day delivery?",
        content:"You can also let your recipient know something is on the way with our new gift email!"
    },
    {
        title:"What are your shipping rates?",
        content:"You can also let your recipient know something is on the way with our new gift email!"
    },
    {
        title:"Where do you ship?",
        content:"You can also let your recipient know something is on the way with our new gift email!"
    },
    {
        title:"Do you ship during the winter?",
        content:"You can also let your recipient know something is on the way with our new gift email!"
    },
];

const Shipping =()=>{
    return (
    <div className="ui container">
        <div className="ui vertical segment " >
            <h4>SHIPPING AND HANDLING</h4>
            <div className="ui left aligned grid">
                <div className="left aligned two column row">
                    <div className="column">
                        <div className="ui left aligned header" >
                            <h1 style={{fontFamily:'Times New Roman, Times, serif' ,fontSize:'4em'}}>Happiness delivered</h1>
                        </div>
                    </div>
                    <div className="column">
                        <Accordion items={items}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Shipping;