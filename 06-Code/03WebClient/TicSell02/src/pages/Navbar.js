import React from 'react';
import "../styles.css";
import UserRegister from './userRegister';
import {Link} from 'react-router-dom';
import ViewUsers from './viewUsers';
import {Route, Navigate } from 'react-router-dom';
import Home from './userList';
import ItemsList from './itemList';

const Navbar = ({brand}) => {
    return (
        <nav className=" navbar">
            <div className="container">
                    <a href='/users' className="navbar-brand">Usuarios {Home}</a>
                    <a href='/viewItems' className="navbar-brand">Productos {ItemsList}</a>
                    <a href='/userRegister' className="navbar-brand">Registrar Usuario {UserRegister}</a>
                    <a href='/itemRegister' className="navbar-brand">Registrar Productos</a>
            </div>
        </nav>



    );
    }

export default Navbar;