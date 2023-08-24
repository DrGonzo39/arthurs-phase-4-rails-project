import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(() => {
        fetch("/me")
        .then((r) => r.json())
        .then((data) => { 
            if (data.errors) {
                console.log(data.errors)
            }else{
                setUser(data)
                setIsLoggedIn(true)
            }
        })
    }, [])
    console.log(user)
    console.log(isLoggedIn)

    function onLogin() {
        setIsLoggedIn(true)
        setUser(user)
    }

    function onSignUp(user) {
        setIsLoggedIn(true)
        setUser(user)
    }

    function onLogout() {
        setIsLoggedIn(false)
        setUser({})
    }

    function onAddAlbum(newAlbum) {
        setUser([...user.albums, newAlbum])
    }

    return(
        <UserContext.Provider value={{ user, onLogin, onSignUp, onLogout, onAddAlbum, isLoggedIn  }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }; 
