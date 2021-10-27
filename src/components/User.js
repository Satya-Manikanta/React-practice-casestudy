import React, { Component } from 'react';

import '../styles/Users.css';

class User extends Component {
    render() {
        return <div className="user-container" title={this.props.user.userName}>
            <div className="user-container-data">
                <img alt="icon" src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"></img>
                <p>{this.props.user.fullName}</p>
                <p>{this.props.user.userName}</p>
                <p>{this.props.user.email}</p>
            </div>
                <div className="description">Description: {this.props.user.description}</div>
        </div>;
    }
}
 
export default User;