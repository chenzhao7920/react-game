import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

class PageHeader extends React.Component {
    render() {
        return (   
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <NavLink to="/" className="navbar-brand">Chen Zhao</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                                {/* NavLink 是一个React组件，React Router配合使用以实现SPA */}
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About Me</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Projects
                           </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink to="/game1" className="dropdown-item">React - Night Tour</NavLink>
                                    <NavLink to="/game2" className="dropdown-item">React Native - Night Tour</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Coming soon</a>
                                </div>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Not avalibale yet" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default PageHeader;