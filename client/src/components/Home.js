import { useContext } from 'react';
import { UserContext } from '../context/user';


function Home() {
    const { user } = useContext(UserContext)

    if (!user) { 
        return (<h3>Please login or signup</h3>)
    }else{
        return (
            <h3>{user.username}'s Homepage</h3>
        )
    }
};

export default Home; 