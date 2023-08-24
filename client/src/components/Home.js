import { useContext } from 'react';
import { UserContext } from '../context/user';
import NewAlbumForm from './NewAlbumForm';

function Home() {
    const { user, isLoggedIn } = useContext(UserContext)

    if (isLoggedIn) { 
        return (
            <>
            <h1>My albums</h1>
            <ul>
            {user.albums.map((album) => (
                <li key={album.id}>{album.title}</li>
            ))}
            </ul>
            <NewAlbumForm />
            </>
        )
    }else{
        return (<h3>Please login or signup</h3>)
    }
};

export default Home; 