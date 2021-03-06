import { Link } from "react-router-dom";




const Featured =()=>{
    return(
        <div className="ui container">
            <div className="ui vertical segment">
                <div className="ui header" style={{ fontSize:'4em'}}>Featured Collections</div>
                <div className="ui left aligned grid" style={{ fontSize:'1.3em'}}>
                    <div className="left aligned four column row">
                        <div className="column">
                        <Link to="/sale">
                            <div className="ui fluid image">
                                <img src="../assets/collection.jpg" alt="collection"/>
                            </div>
                            <br/>
                            <div className="ui item">
                            Sale
                            <i className="long arrow alternate right icon"></i>
                            </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/gift">
                            <div className="ui fluid image">
                                <img src="../assets/gifts.jpg" alt="gifts"/>
                            </div>
                            <br/>
                            <div className="ui item">
                            Gifts
                            <i className="long arrow alternate right icon"></i>
                            </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/newarrivals">
                                <div className="ui fluid image">
                                    <img src="../assets/holiday.jpg" alt="holiday"/>
                                </div>
                                <br/>
                                <div className="ui item">
                                New Arrivals
                                <i className="long arrow alternate right icon"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/easycare">
                                <div className="ui fluid image">
                                    <img src="../assets/christmas.jpg" alt="christmas"/>
                                </div>
                                <br/>
                                <div className="ui item">
                                Easy-Care
                                <i className="long arrow alternate right icon"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                <h1 style={{fontSize:'4em'}}>To be human is to experience biophilia</h1>
                <h2><em>[bio-feelya] - That craving for nature,in all forms.</em></h2>
                </div>
            </div>
            
        </div>
    )
}

export default Featured;