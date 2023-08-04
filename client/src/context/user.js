import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    //auto-login and onLogin can go here
    useEffect(() => {
        fetch("/me")
        .then((r) => r.json())
        .then((data) => setUser(data))
    }, [])

    function onLogin() {

    }

    function onSignUp(user) {
        setUser(user)
    }

    function onLogout () {

    }

    return(
        <UserContext.Provider value={{ user, onLogin, onSignUp, onLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }; 
