import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () =>{
    return (
        <div className="ui container" style={{fontFamily:'Times New Romans'}}>
            <div className="ui center aligned vertical segment " style={{backgroundColor:'#00ab84'}}>
                <div className="ui center aligned secondary menu" >
                    <div className="item">
                    <span style={{color:'white',paddingLeft:'25px'}}>Order by 12/15 for guaranteed delivery by 12/25</span>
                    </div>
                    <div className="item"> 
                    <Link to="/plants" className="ui button" style={{color:'#00ab84'}}> Shop now</Link>
                    </div>
                </div>
            </div>
            <div className="ui vertical segment " style={{padding:'25px'}}>
                <h1 className="ui header">
                    <Link to="/">The Mononoke forest</Link>
                </h1>
                <hr/>
                <div className="ui secondary menu">
                    <Link to="/plants" className="item"> Plants</Link>
                    <Link to="/sale" className="item"> Sale</Link>
                    <Link to="/subscription" className="item"> Subscription</Link>
                    <Link to="/stores" className="item"> Store Locations</Link>
                    <Link to="/gift" className="item"> Gift Cards</Link>
                    <div className="right menu">
                        <div className="ui item">
                            <i className="search link icon"></i>
                            Search
                        </div>
                        <div className="ui item">
                            <i className="cart icon"></i>
                            Cart (0)
                        </div>
                        <div className="ui item"> <GoogleAuth/></div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Header;