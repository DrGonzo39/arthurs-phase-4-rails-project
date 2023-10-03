import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "75px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "crimson",
    textDecoration: "none",
    color: "white",
  };
  

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
            <h1 id="user_name_text">{`Hello ${user.username}`}</h1>
            <br/>
            <button style={linkStyles} onClick={logout}>Logout</button>
            <NavLink to="/"
                exact style={linkStyles}
            >
                Home 
            </NavLink>
            <NavLink to="/albums"
                exact style={linkStyles}
            >
                All Albums 
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