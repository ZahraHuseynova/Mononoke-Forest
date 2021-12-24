const Stores =()=>{
    return(
        <div className="ui container">
            <div className="ui vertical segment" >
                
                <h4 >LOCATIONS</h4>
                <h1 style={{fontSize:'5em',fontFamily:'Times New Roman, Times, serif'}}>Store Locations</h1>
                <div className="ui left aligned grid">
                    <div className="left aligned two column row">
                        <div className="column">
                            <div>
                                <h1 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>California</h1>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>Los Angeles, West Hollywood</h4>
                                <p>8125 W 3rd Street</p>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>San Francisco, Cow Hollow</h4>
                                <p>2181 Union Street</p>
                            </div>
                            <br/>
                            <div>
                                <h1 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>Illinois</h1>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>Chicago, Southport Corrridor</h4>
                                <p>1351 W Roscoe Street</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <h1 style={{fontSize:'3em',fontFamily:'Times New Roman, Times, serif'}}>New York</h1>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>New York, Uppor West Side</h4>
                                <p>448 Amsterdam Ave</p>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>New York, Lower East Side</h4>
                                <p>84 Hester Street</p>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>New York, Williamburg</h4>
                                <p>190 Berry Street</p>
                                <h4 style={{fontFamily:'Times New Roman, Times, serif'}}>New Yorko, Cobble Hill</h4>
                                <p>195 Pacific Street</p>
                            </div>
                                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stores;