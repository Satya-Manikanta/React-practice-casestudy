import React, { Component } from 'react';

import '../styles/Users.css';

import User from './User';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            value: "",
            filteredData: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        var users = this.props.users;
        this.setState({
            filteredData: users
        });
    }

    //On change in input field the data is filtered and stored.
    handleChange(event) {
        event.preventDefault();
        console.log(this.props.users);
        let str = event.target.value;
        this.setState({
            filteredData: this.props.users.filter((user) => user.fullName.toLowerCase().includes(str.toLowerCase()))
        })
    }
    
    render() {
        return <div className="login-Container">
            <input className="search-input" type="text" name="search" placeholder="Search using fullname..." onChange={this.handleChange}></input>
            <div className="login-Container-data">
                {this.state.filteredData.map((user, index) => (<User key={index} user={user}>{user}</User>))}
            </div>    
        </div>;
    }
}
 
export default Users;