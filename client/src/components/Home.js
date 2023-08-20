import { useContext } from 'react';
import { UserContext } from '../context/user';

function Home() {
    const { user } = useContext(UserContext)

    if (!user) { 
        return (<h3>Please login or signup</h3>)
    }else{
        return (
            <>
            <h3>My albums</h3>
            {/* {user.albums.map((album) => {
                <li>{album.title}</li>
            })} */}
            </>
        )
    }
};

export default Home; 