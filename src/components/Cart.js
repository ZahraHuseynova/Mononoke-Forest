import { connect } from 'react-redux';

const Cart=()=>{
    return(
        <div className='ui container'>
            <div className='ui vertical  segment'>
                <div className='ui left aligned grid'>
                    <div className='left aligned two column row'>
                        <div className='column'>
                            <div className='ui middle aligned divided list'>
                                <div className='item'>
                                    <div className='right floated content'>
                                        Quantity &nbsp;
                                        <a className='ui basic label'>
                                            0
                                        </a>
                                        <br/>
                                        <br/>
                                        <div className='ui circular big labels'>
                                            <a className='ui label'>
                                                <i className='trash alternate outline icon'></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='left floated content'>
                                    <img className='ui small image' src="../assets/trending4.jpg" alt="trendig"/>
                                    </div>
                                    
                                    <div className='content'>
                                    <strong>Aglaonema Siam</strong>
                                    </div>
                                    <br/>
                                    <div className='content'>
                                    This is description for ploant
                                    </div>
                                    <br/>
                                    <div className='content'>
                                    <strong>$40.00</strong>
                                    </div>
                                    
                                </div>
                                <div className='item'>
                                    <div className='right floated content'>
                                        Quantity &nbsp;
                                        <a className='ui basic label'>
                                            0
                                        </a>
                                        <br/>
                                        <br/>
                                        <div className='ui circular big labels'>
                                            <a className='ui label'>
                                                <i className='trash alternate outline icon'></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='left floated content'>
                                    <img className='ui small image' src="../assets/trending4.jpg" alt="trendig"/>
                                    </div>
                                    
                                    <div className='content'>
                                    <strong>Aglaonema Siam</strong>
                                    </div>
                                    <br/>
                                    <div className='content'>
                                    This is description for ploant
                                    </div>
                                    <br/>
                                    <div className='content'>
                                    <strong>$40.00</strong>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='center aligned column'>
                            <div className='ui card'>
                                <div className='content'>
                                    <strong>Cart Summary</strong>
                                </div>
                                <div className='content'>
                                    TOTAL :(1 item)
                                </div>
                                <div className='content'>
                                    <strong>$ 40.00</strong>
                                </div>
                                <button className='ui fluid button'>Proceed to checkout</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Cart;