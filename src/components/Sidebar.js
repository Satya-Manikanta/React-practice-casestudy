import React, { Component } from 'react';

import '../styles/Sidebar.css';

import Profile from './Profile';
import Users from './Users';

class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            success: true,
            "profile": false,
            "users": false
        }
        this.showComponent = this.showComponent.bind(this);
    }

    //function to enable the respective button Component.
    showComponent(name) {
        switch(name) {
            case "profile":
                if (this.state.profile === this.state.users)
                    this.setState({profile: !this.state.profile});
                else {
                    if (this.state.profile === true) {
                    }
                    else {
                        this.setState({
                            profile: !this.state.profile,
                            users: !this.state.users
                        });
                    }
                }
                break;
            case "users":
                if (this.state.profile === this.state.users)
                    this.setState({users: !this.state.users});
                else {
                    if (this.state.users === true) {
                    }
                    else{
                        this.setState({
                            profile: !this.state.profile,
                            users: !this.state.users
                        });
                    }
                }
                break;
            default:
                this.setState({ success: !this.state.success });
                break;
        }
    }

    render() { 
        return (<div>
                {this.state.profile && <Profile usersData={this.props.users} history={this.props.history} delUser={this.props.delUser} updateUser={this.props.updateUser}/>}
                {this.state.users && <Users users={this.props.users}/>}

                <div className="sidenav">
                    <button type="submit" onClick={() => this.showComponent("profile")}><b>Profile</b></button>
                    <button type="submit" onClick={() => this.showComponent('users')}><b>Users</b></button>
                </div>
            
        </div>);
    }
}
export default Sidebar;