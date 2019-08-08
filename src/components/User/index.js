import React from 'react';
import { withFirebase } from '../Firebase';
import './index.css';
import { H1 } from '@blueprintjs/core';

class User extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const users = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uuid: key
            }))
            this.setState({
                users: users,
                loading: false
            });
        });
    }
    
    componentWillUnmount() {
        this.props.firebase.users().off(); 
    }

    render() {
        const {loading, users} = this.state;
        console.log(users);
        return (
            <>
                <H1>Users Management</H1>
                {loading && <h3>Loading ...</h3>}
                <UserList users={users} /> 
            </>
        );
    }
}

const renderUser = (user, index) => {
    const tds = [];
    tds.push(<td>{index}</td>);
    tds.push(<td>{user.username}</td>);
    tds.push(<td>{user.email}</td>);
    tds.push(<td><button>Update</button></td>);
    tds.push(<td><button>Delete</button></td>);
    return <tr>{tds}</tr>
}

const UserList = ({users}) => (
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index) => {
                return renderUser(user, index);
            })}
        </tbody>
    </table>
);

export default withFirebase(User);