import React, { Component } from 'react';
import RegistrationLink from './RegistrationLink';

import '../styles/Form.css';

class Login extends Component {

    constructor() {
        super()
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    //Validating the logged user is valid or not.
    //If valid then redirected to "/LoginSuccess"
    loginSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        console.log(userName, password);

        if (userName && password) {
            let users = this.props.users;
            users = users.filter(user => (user.userName === userName && user.password === password));
            console.log(users);
            if (users.length > 0) {
                console.log("Valid login");
                this.props.history.push('/LoginSuccess/' + users[0].id);
            }
            else
                alert("Please, check credentials");
        }
    }

    render() { 
        return <div  className="main-container">
            <form className="login-form" onSubmit={this.loginSubmit}>
                <h1>Login Here...</h1>
                <input type="text" placeholder="Username" name="username" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <button type="submit">Login</button>
                <RegistrationLink />
            </form>
        </div>;
    }
}
 
export default Login;