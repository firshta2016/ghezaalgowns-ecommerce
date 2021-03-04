import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../gezallogo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                    <Link to="/">
                    <img src={logo} alt="logo" className='logo navbar-brand' />
                        A Bridal Gown Shop
                    </Link>
                        <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarRightAlignExample"
                        aria-controls="navbarRightAlignExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i class="fas fa-bars"></i>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarRightAlignExample">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to="/" className="nav-link"> bride </Link>
                            </li>
                            <li class="nav-item">
                            <Link to="BridesMaid" className="nav-link">bridesmaid</Link>
                            </li>
                            <li className="active nav-item">
                            <Link to="/Shoes" className="nav-link">
                                 shoes
                              </Link>
                          </li>
                            <Link to="/Cart" className="ml-auto">
                                <ButtonContainer>
                                <span>
                                    <i className="fa fa-cart-plus" />
                                </span>
                                my cart
                                </ButtonContainer>
                            </Link>
                        </ul>
                    </div>
                </div>
                </nav>
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
        margin-left: 850px;
    } 
    .navbar-toggler {
        background-color: var(--lightBlue);
    }
    .navbar-brand {
        height: 100px;
        text-decoration: none;
    }
`;