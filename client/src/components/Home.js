import { useContext } from 'react';
import { UserContext } from '../context/user';


function Home() {
    const { user, isLoggedIn } = useContext(UserContext)

    if (isLoggedIn) { 
        return (
            <>
            <h1>My Reviewed Albums</h1>
            <h2>
            {user.albums.map((album) => (
                <p key={album.id}>{album.title}</p>
            ))}
            </h2>
            </>
        )
    }else{
        return (<h3>Please login or signup</h3>)
    }
};

export default Home; 