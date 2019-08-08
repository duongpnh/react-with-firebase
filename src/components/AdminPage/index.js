import React from 'react';
import { withFirebase } from '../Firebase';

class AdminPage extends React.Component {
    
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
                <h1>AdminPage working</h1>
                {loading && <h3>Loading ...</h3>}
                <UserList users={users} /> 
            </>
        );
    }
}

const UserList = ({users}) => (
    <ul>
        {users.map(user => (
            <li key={user.uuid}>
                <span><strong>ID:</strong> {user.uuid}</span>
                <span><strong>Username:</strong> {user.username}</span>
                <span><strong>Email:</strong> {user.email}</span>
            </li>
        ))}
    </ul>
);

export default withFirebase(AdminPage);