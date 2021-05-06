import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid d-flex">
                
                <Link className="navbar-brand bd-highlight" to="/">
                    Clases
                </Link>

                <div className="navbar-nav bd-highlight">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="/saber">Saber</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/caster">Caster</NavLink>
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/search">Search</NavLink>
                </div>

                <div className="navbar-nav ms-auto bd-highlight">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Logout</NavLink>
                </div>
            </div>
        </nav>
    )
};