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

    return(
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }; 
