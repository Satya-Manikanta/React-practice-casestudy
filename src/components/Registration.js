import React, { Component } from 'react';
import LoginLink from './LoginLink';

import '../styles/Form.css';

class Registration extends Component {

    constructor() {
        super();
        this.userRegister = this.userRegister.bind(this);
    }

    //Adding a new user using registration page...
    userRegister(event) {
        event.preventDefault();
        const fullName = event.target.elements.fullName.value;
        const email = event.target.elements.email.value;
        const userName = event.target.elements.userName.value;
        const password = event.target.elements.password.value;
        const user = {
            id: Number(new Date()),
            fullName: fullName,
            email: email,
            userName: userName,
            password: password
        }
        if (fullName && email && userName && password) {
            this.props.onAddUser(user);
        }
    }

    render() { 
        return <div className="main-container">
            <form className="form" onSubmit={this.userRegister}> 
                <h1>Welcome to Casestudy...</h1>
                <input type="text" placeholder="Fullname" name="fullName" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="text" placeholder="Username" name="userName" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <button type="submit">Register</button>
                <LoginLink/>
            </form>
        </div>;
    }
}
 
export default Registration;