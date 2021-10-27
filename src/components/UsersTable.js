import React, { Component } from 'react';
import LoginLink from './LoginLink';

class UsersTable extends Component {
    render() { 
        return <div>
            <h3> All users </h3>
            <table>
                <thead>
                    <th>Fullname</th>
                    <th>Username</th>
                </thead>
                <tbody>
                {this.props.users.map((user, index) => <tr key={index}>
                    <td>{user.fullName}</td>
                    <td>{user.userName}</td>
                </tr>)}
                </tbody>
            </table>
            <LoginLink/>
        </div>;
    }
}
 
export default UsersTable;