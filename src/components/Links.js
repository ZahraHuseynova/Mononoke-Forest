import { Link } from "react-router-dom";
const Links =()=>{
    return (
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui left aligned grid">
                    <div className="ui left aligned three column row">
                        <div className="column">
                            <Link to="/plants"><img className="ui tiny image" src="../assets/online.jpg" alt="online"/> </Link>
                            <h2>Shop online</h2>
                            <p>Enjoy plants, pots, botanicals and more delivered to your door. Our plant care library and virtual workshops provide support and encouragement to all plant parents.</p>
                        </div>
                        <div className="column">
                           <Link to='/subscription'> <img className="ui tiny image" src="../assets/sups.jpg" alt="sups"/> </Link>
                            <h2>Subscribe</h2>
                            <p>Look forward to a new plant every month. We choose for you from best sellers and subscriber-only plants, while you enjoy free shipping and other community perks.</p>
                        </div>
                        <div className="column">
                            <Link to='/stores'><img className="ui tiny image" src="../assets/store.jpg" alt="store"/></Link> 
                            <h2>Shop In-Store</h2>
                            <p>Visit our stores in New York, L.A., San Francisco and Chicago to explore your online favorites and discover specialty plants from local growers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links;