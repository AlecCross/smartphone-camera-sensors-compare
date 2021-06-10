//https://materializecss.com/navbar.html
import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";

const logoutHandler = event => {
    event.preventDefault()
    //
    //history.push('/')
}

export const Navbar = () =>{
    return(
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <span href="/" className="brand-logo"></span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/comparison">Сравнение</NavLink></li>
                    <li><NavLink to="/sensors">Сенсоры</NavLink></li>
                    {/*<li><a href="/" onClick={logoutHandler}>Выйти</a></li>*/}
                </ul>
            </div>
        </nav>
    )
}