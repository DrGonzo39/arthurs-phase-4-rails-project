import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Home() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
        {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <button onClick={() => setShowLogin(false)}>
                    Don't have an account? Sign up! 
                </button>
            </>
        ): (
            <>
            <SignUpForm onSignUp={onSignUp} />
            <button onClick={() => setShowLogin(true)}>
                Already Have an account? 
            </button>
            </>
        )}
        </>
    )
}

export default Home; 