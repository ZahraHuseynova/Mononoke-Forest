import MainPage from "./MainPage";

const Header = () =>{
    return (
        <div className="ui container" style={{fontFamily:'Times New Romans'}}>
            <div className="ui center aligned vertical segment " style={{backgroundColor:'#00ab84'}}>
                <div className="ui center aligned secondary menu" >
                    <div className="item">
                    <span style={{color:'white',paddingLeft:'25px'}}>Order by 12/15 for guaranteed delivery by 12/25</span>
                    </div>
                    <div className="item"> 
                    <button className="ui button" style={{color:'#00ab84'}}> Shop now</button>
                    </div>
                </div>
            </div>
            <div className="ui vertical segment " style={{padding:'25px'}}>
                <h1 className="ui header">
                    The Mononoke forest
                </h1>
                <hr/>
                <div className="ui secondary menu">
                    <a className="item"> Plants</a>
                    <a className="item"> Sale</a>
                    <a className="item"> Subscription</a>
                    <a className="item"> Store Locations</a>
                    <a className="item"> Gift Cards</a>
                    <div className="right menu">
                        <div className="ui item">
                            <i className="search link icon"></i>
                            Search
                        </div>
                        <a className="ui item"> Log in</a>
                        <div className="ui item">
                            <i className="cart icon"></i>
                            Cart (0)
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Header;