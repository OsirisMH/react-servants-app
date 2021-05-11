import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext( AuthContext );
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });

    };
    

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
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
};