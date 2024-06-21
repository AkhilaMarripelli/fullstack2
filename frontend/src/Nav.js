import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav=()=>{
    return(
        <>
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid bg-light">
            <Link className="navbar-brand" to="/">
                <span className="brand-logo">E-learning</span>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#expandedNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="expandedNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-3"><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                    <li class="nav-item mx-3"><Link style={{textDecoration:"none"}} to="/about">About</Link></li>
                    <li class="nav-item mx-3"><Link style={{textDecoration:"none"}} to="/form">Register</Link></li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}
export {Nav};