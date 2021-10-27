import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import '../styles/Header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            loginuser: {}
        };
    }

    componentDidMount() {
        let path = window.location.href;
        path = Number(path.split("/")[4]);
        let user = this.props.users.filter((user) => user.id === path);
        console.log(...user);
        this.setState((state) => ({
            loginuser: user[0]
        }));
    }

    render() { 
        return <div>
            <div className="header-body">
                <h3>Hi, {this.state.loginuser.fullName}</h3>
                <Link to="/"><button className="header-body-button" type="submit">Logout</button></Link>
                
                <Sidebar users={this.props.users} history={this.props.history} delUser={this.props.onDelUser}
                updateUser={this.props.onUpdateUser}/>
            </div>
        </div>;
    }
}
 
export default Header;