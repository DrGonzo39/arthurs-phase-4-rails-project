import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const {user, onLogout} = useContext(UserContext)

    function logout() {
        fetch("/logout")
        .then(() => {
            onLogout()
        })
    }

    if (user) {
        return (
            <>
            <h1>Hello {user.username}</h1>
            <br/>
            <button onClick={logout}>Logout</button>
            </>
        )
    }else{
        return (
            <>
            <NavLink to="/login">
                Login
            </NavLink>
            </>
        )
    }
}

export default NavBar;