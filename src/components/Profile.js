import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import '../styles/LoginContainer.css';
import '../styles/Profile.css';
import Search from './Search';

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            loginuser: {}
        }
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.strikeData = this.strikeData.bind(this);
    }

    //Getting the logged user details using url path.
    componentDidMount() {
        let path = window.location.href;
        path = Number(path.split("/")[4]);
        let user = this.props.usersData.filter((user) => user.id === path);
        console.log(user[0]);
        this.setState({
            loginuser: user[0]
        });
    }

    //Onclick update button user details are updated with the below function.
    updateUser(event) {
        event.preventDefault();
        console.log(this.state.loginuser);
        let ack = document.getElementById("check").checked;
        if (ack)
            this.props.updateUser(this.state.loginuser);
        else
            alert("Please acknowledge, before updating....");
    }

    //Onclick delete, user is deleted
    deleteUser(event) {
        event.preventDefault();
        let ack = document.getElementById("check").checked;
        if (ack) {
            this.props.delUser(this.state.loginuser);
            this.props.history.push("/Login");
        }
        else 
            alert("Please, acknowledge before deleting..!");
    }

    //used for input tag changes
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            value: event.target.value})
    }

    //this function is used for the striking the line with the help of checkbox.
    strikeData(event) {
        let x = document.getElementById("check").checked;
        if (x === true) {
            let data = document.getElementById("sample").innerText;
            document.getElementById("sample").innerHTML = null;
            document.getElementById("sample").innerHTML = data;
        }
        else {
            let data = document.getElementById("sample").innerHTML;
            document.getElementById("sample").innerHTML = "<strike>" + data + "</strike>";
        }
    }

    render() { 
        return <div className="login-Container">
            Welcome to profile
            <form className="login-Container-form" name="profile">
                <div>
                    <strong>Full Name:</strong>
                    <input type="text" name="fullName" defaultValue={this.state.loginuser && this.state.loginuser.fullName} onChange={(e) => this.setState((state) => {this.state.loginuser.fullName = e.target.value})} required/>
                </div>
 
                <div>
                    <strong>Email:</strong>
                    <input type="email" name="email" defaultValue={this.state.loginuser && this.state.loginuser.email} onChange={(e) => this.setState((state) => {this.state.loginuser.email = e.target.value})} required/>
                </div>
               
                <div>
                    <strong>User Name:</strong>
                    <input type="text" name="userName" defaultValue={this.state.loginuser.userName} onChange={(e) => this.setState((state) => {this.state.loginuser.userName = e.target.value})} required/>
                </div>

                <div>
                    <strong>Password:</strong>
                    <input type="password" name="password" defaultValue={this.state.loginuser.password} onChange={(e) => this.setState((state) => {this.state.loginuser.password = e.target.value})} required/>
                </div>

                <div>
                    <strong>Location</strong>
                    <Search/>
                </div> 

                <div></div>
                
                <div>
                    <button type="submit" onClick={this.updateUser}>Update</button>
                </div>

                <div>
                    <Link to="/Login">
                        <button type="submit" onClick={this.deleteUser} >Delete User</button>
                    </Link>
                </div>

            </form>
            <p className="checkbox">
                <input type="checkbox" name="sample" id="check" onChange={this.strikeData} />
                <label for="sample" id="sample"><strike>I acknowledge, above given data is true.</strike></label>
            </p>
        </div>;
    }
}
 
export default Profile;