import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    onEmailChange=(e)=>{
        this.setState(()=>{
            return {
                email: e.target.value
            }
        })
    }
    onPasswordChange=(e)=>{
        this.setState(()=>{
            return {
                password: e.target.value
            }
        })
    }
    onSignIn = ()=>{
        let emailvalidation = this.state.email.split('');

        if(!emailvalidation.includes('@') || !emailvalidation.includes('.')){
            this.props.grab_signin_result('please enter valid email')
            return
        }
        fetch('https://polar-plateau-44003.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(a=>{
            return a.json()
        })
        .then(a=>{
            console.log(a)
            if(a[0].name != null){
                this.props.onRoutechange('home')
                console.log(a[0])
                this.props.grab_user(a[0])
            }else{
                this.props.grab_signin_result('fail')
            }
        })
    }
    render(){
        return(
            <div className="Signin">
                <div>
                    <div className="title">
                        <h1>Zero To Mastery - Smart Brain App</h1>
                        <p>React - Node - Express - PostgreSQL</p>
                    </div>
                    Email: <input onChange={this.onEmailChange} /> <br />
                    <br />
                    Password: <input onChange={this.onPasswordChange} type="password"/> <br />
                    <br />
                    <button onClick={()=>{this.onSignIn()}} >Sign In</button><br /><br />
                    <button onClick={()=>{this.props.onRoutechange('register')}} >Register</button>
                </div>
            </div>
        )
    }
}

export default Signin