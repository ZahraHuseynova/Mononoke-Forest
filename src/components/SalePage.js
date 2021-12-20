import Accordion from "./Accordion";

const items =[
    {
        title:"1.What if I've never had a plant before?",
        content:"This is a plant parent judgement-free zone. Every plant from The Mononoke comes with direct access to digital Care Library and our team of houseplant experts to answer any questions you might have. From where to put your plant,to how to care for it, we're here to help."
    },
    {
        title:"2. Where do you ship?",
        content:"We currently ship plants and plant supplies within the the contiguous US to all 48 states."
    },
    {
        title:"3.What if my order is a gift?",
        content:"You can also let your recipient know something is on the way with our new gift email!"
    }
];
const Sale =() =>{
    return(
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui header" style={{color:'#00ab84', fontSize:'4em',padding:'25px'}}>Sale</div>
                <p style={{color:'#00ab84',fontSize:'1.5em'}}>Shop up to 50% off top-selling plants, planers,holiday bundles,and so much more. Items are limited!</p>
                <div className="ui three stackable cards">
                <div className="card">
                    <div className=" ui fluid image">
                        <div className="ui teal ribbon label">
                            <i className="star icon">Limited Time Only</i>
                        </div>
                        <img src="../assets/autumn.jpg" alt="trendig"/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>Autumn Fern</strong></span>
                        <span className="right floated text">$33-$55</span>
                    </div>
                </div>
                <div className="card">
                    <div className="ui fluid image">
                    <div className="ui teal ribbon label">
                            <i className="star icon">50% Off</i>
                        </div>
                        <img src="../assets/hoya.jpg" alt="trendig"/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>Hoya</strong></span>
                        <span className="right floated text">
                            <s>$45</s> &nbsp;
                            <span style={{color:'red'}}>$21+</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="ui fluid image">
                        <div className="ui teal ribbon label">
                            <i className="star icon">Limited Time Only</i>
                        </div>
                        <img src="../assets/pet-friendly.jpg" alt="trendig"/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>Arrowhead Plant</strong></span>
                        <span className="right floated text">$54-$65</span>
                    </div>
                </div>
                <div className="card">
                    <div className="ui fluid image">
                        <div className="ui teal ribbon label">
                            <i className="star icon">50% Off</i>
                        </div>
                        <img src="../assets/trending4.jpg" alt="trendig"/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>String of Pearls</strong></span>
                        <span className="right floated text">
                            <s>$45</s> &nbsp;
                            <span style={{color:'red'}}>$21+</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="ui fluid image">
                        <div className="ui teal ribbon label">
                            <i className="star icon">50% Off</i>
                        </div>
                        <img src="../assets/croton.jpg" alt="trendig"/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>String of Pearls</strong></span>
                        <span className="right floated text">
                            <s>$45</s> &nbsp;
                            <span style={{color:'red'}}>$21+</span>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="ui fluid image">
                        <div className="ui teal ribbon label">
                            <i className="star icon">50% Off</i>
                        </div>
                        <img src="../assets/palm.jpg" alt="trendig"/>
                    </div>
                    <div className="extra content">
                        <span className="left floated text"><strong>String of Pearls</strong></span>
                        <span className="right floated text">
                            <s>$45</s> &nbsp;
                            <span style={{color:'red'}}>$21+</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="ui left aligned grid">
                <div className="left aligned two column row">
                    <div className="column">
                        <div className="ui left aligned header" >
                            <h1 style={{fontSize:'3em', color:'#00ab84'}}>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className="column">
                        <Accordion items={items}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Sale;