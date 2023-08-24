import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const {user, isLoggedIn, onLogout} = useContext(UserContext)
    const navigate = useNavigate()

    function logout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        .then(() => {
            onLogout()
            navigate('/')
        })
    }

    if (isLoggedIn) {
        return (
            <>
            <h1>{`Hello ${user.username}`}</h1>
            <br/>
            <button onClick={logout}>Logout</button>
            <NavLink to="/">
                Home 
            </NavLink>
            </>
        )
    }else{
        return (
            <>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/signup">
                Sign up 
            </NavLink>
            </>
        )
    }
}

export default NavBar;