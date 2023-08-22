import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //auto-login and onLogin can go here
    useEffect(() => {
        fetch("/me")
        .then((r) => r.json())
        .then((data) => { 
            setUser(data)
            data.error ? setIsLoggedIn(false) : setIsLoggedIn(true) 
        })
    }, [])

    function onLogin() {
        setUser(user)
        setIsLoggedIn(true)
    }

    function onSignUp(user) {
        setUser(user)
        setIsLoggedIn(true)
    }

    function onLogout () {
        setUser(null)
        setIsLoggedIn(false)
    }

    return(
        <UserContext.Provider value={{ user, onLogin, onSignUp, onLogout, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }; 
