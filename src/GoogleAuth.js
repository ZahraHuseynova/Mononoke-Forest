import { Component } from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from './actions'

class GoogleAuth extends Component{

    componentDidMount(){
        window.gapi.load('auth2',()=>{
            window.gapi.auth2.init({
                clientId:'179236036544-5bcs9vr6j9a35sgg11epeso2n9ct245g.apps.googleusercontent.com',
                scope:'email',
            })
            .then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(()=>this.onAuthChange(this.auth.isSignedIn.get()))
            })
        })
    }

    onSignInClick=()=>{
        this.auth.signIn()
    }

    onSignOutClick =()=>{
        this.auth.signOut()
    }

    onAuthChange =(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn()
        }else {
            this.props.signOut()
        }
    }

    renderAuthButton = ()=>{
        if(this.props.isSignedIn ===null){
            return null;
        }
        else if (this.props.isSignedIn){
            return <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon"></i>Log out</button>
        }
        else {
            return <button className="ui teal google button" onClick={this.onSignInClick}><i className="google icon"> </i>Log in</button>
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return { isSignedIn:state.auth.isSignedIn}
}

export default connect (null,{signIn,signOut})(GoogleAuth);