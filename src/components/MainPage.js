const MainPage =()=>{
    return(
        <div className="ui container">
            <div className="ui vertical segment " style={{padding:'25px',backgroundColor:'wheat'}}>

                <div className="ui left aligned grid">
                    <div className="left aligned two column row">
                        <div className="column">
                            <div className="ui left aligned header" >
                                <h1 style={{fontSize:'4em'}}>Everyone loves a green gift</h1>
                            </div>
                            <h4>Plants,bouqeuts,and biophilic decor of all stripes and sizes delivered to their doorstep.</h4>
                            <button className="ui button" style={{backgroundColor:'#00ab84',color:'white'}}> Shop now</button>
                        </div>
                        <div className="column">
                            <img src="../assets/forest.jpg" alt="forest"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;