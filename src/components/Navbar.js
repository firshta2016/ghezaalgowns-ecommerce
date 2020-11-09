import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../gezallogo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className='logo navbar-brand' />
                    A Bridal Gown Shop
                </Link>
            {/** Toggler/collapsibel Button*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#collapsibleNavbar' >
                    <span className="navbar-toggler-icon"></span>
                </button>
            {/**Navbar Links */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="active nav-item">
                    <Link to="/" className="nav-link">
                        bride 
                    </Link>
                </li>
                <li className="active nav-item">
                    <Link to="/" className="nav-link">
                        bridesmaid & bridal party 
                    </Link>
                </li>
                <li className="active nav-item">
                    <Link to="/" className="nav-link">
                        shoes & accessories
                    </Link>
                </li>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                    <span>
                        <i className="fa fa-cart-plus" />
                    </span>
                    my cart
                    </ButtonContainer>
                </Link>
                </ul>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
    border-bottom: var(--mainBlue) 2px solid;
    .nav-link{
        color:var(--navColor) !important;
        font-size: 1.3rem;
        text-transform: capitalize; 
        font-family: 'Caladea', sans-serif !important;
        background-color: rgb(252, 250, 250) !important;
        color: var(--mainGrey) !important;
    }
    .navbar-nav {
        margin-left: 550px;
    } 
    .navbar-toggler {
        background-color: var(--lightBlue);
    }
    .navbar-brand {
        height: 100px;
    }
`;