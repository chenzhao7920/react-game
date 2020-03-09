import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

class PageHeader extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink to="/" className="navbar-brand">牛逼React</NavLink>
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
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        一些游戏
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="/game" className="dropdown-item">踩格子</NavLink> 
                        <NavLink to="/knight" className="dropdown-item">骑士</NavLink> 
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">还没想好</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="搜索还不管用" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default PageHeader;