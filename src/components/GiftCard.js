const GiftCard =()=>{
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
                        <div class="ui fluid selection dropdown">
                            <input type="hidden" name="user"/>
                            <i class="dropdown icon"></i>
                            <div class="text">Select Amount</div>
                                <div class="menu">
                                    <div class="item" data-value="25">
                                    $25
                                    </div>
                                    <div class="item" data-value="50">
                                    $50
                                    </div>
                                    <div class="item" data-value="100">
                                    $100
                                    </div>
                                    <div class="item" data-value="150">
                                    $150
                                    </div>
                                    <div class="item" data-value="250">
                                    $250
                                    </div>
                                    <div class="item" data-value="500">
                                    $500
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="item">
                            <button className="fluid ui button" style={{backgroundColor:'#00ab84', color:'white'}}>Gift</button>
                            </div>

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
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default GiftCard;