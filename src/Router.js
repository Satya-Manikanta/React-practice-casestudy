import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';

import Registration from './components/Registration';
import Login from './components/Login';
import UsersTable from './components/UsersTable';
import Header from './components/Header';

class Router extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    //Getting the data from .json file
    componentDidMount() {
        let users = require('./data/users.json');
        console.log(users);
        this.setState({
            users: users
        });
    }

    //Adding the new user to users array
    addUser(user) {
        console.log(user);
        this.setState((state) => ({
            users: state.users.concat(user)
        }));
    }

    //Deleting the user from users array
    deleteUser(delUser) {
        console.log(delUser);
        this.setState((state) => ({
            users: state.users.filter((user) => user.id !== delUser.id)
        }));
        console.log(this.state.users);
    }

    //Updating the user details after the changes
    updateUser(newData) {
        console.log(newData);
        const user = this.state.users.filter(user => user.id !== newData.id);
        this.setState((state) => ({
            users: user.concat(newData)
        }));
    }

    render() { 
        return <div >

            <Route exact path="/" render = {({history}) => (
                <div>
                    <Registration onAddUser = {(user) => {
                        this.addUser(user);
                        console.log(this.state.users);
                        history.push('/RegistrationSuccess');
                    }}/>
                </div>
            )}/>

            <Route path="/RegistrationSuccess" render = {() => (
                <div>
                    <h2>Registration Success</h2>
                    <Link to="/Login"> Click here to login..</Link>
                </div>
            )}/>


            <Route path='/Login' render = {({history}) => (
                <div>
                    <Login users={this.state.users} history={history}/>
                </div>
            )} />

            <Route path="/LoginSuccess/" render = {({history}) => (
                <div>
                    <Header users={this.state.users} history={history} 
                    onDelUser={(delUser) => { this.deleteUser(delUser) }} 
                    onUpdateUser={(newData) => { this.updateUser(newData) }}/>
                </div>
            )}/>

            {/* This route is not implemented just for checking the data */}
            <Route path="/UsersTable" render = {() => (
                <UsersTable users={this.state.users}/>
            )}/>

        </div>;
    }
}
 
export default Router;