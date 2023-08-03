import { useContext } from 'react';
import { UserContext } from '../context/user';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Home() {
    // const [showLogin, setShowLogin] = useState(true);
    const { user } = useContext(UserContext)

    if (!user) { 
        return (<h3>Please login or signup</h3>)
    }else{
        return (
            <h3>{user.username}</h3>
        )
    }

    // return (
    //     <>

    //     {/* {showLogin ? (
    //         <>
    //             <LoginForm onLogin={onLogin} />
    //             <button onClick={() => setShowLogin(false)}>
    //                 Don't have an account? Sign up! 
    //             </button>
    //         </>
    //     ): (
    //         <>
    //         <SignUpForm onSignUp={onSignUp} />
    //         <button onClick={() => setShowLogin(true)}>
    //             Already Have an account? 
    //         </button>
    //         </>
    //     )} */}
    //     </>
    // )
}

export default Home; 