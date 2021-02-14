import React from 'react';
import './container.css';
import {Link} from 'react-router-dom';
function Nav(){

return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
     <Link to="/"> <a className="navbar-brand" href="#">DIEMx</a></Link> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="home"> <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li></Link>
          <Link to="search"> <li className="nav-item">
            <a className="nav-link" href="#">Search</a>
          </li> </Link>
         
        </ul>
        
      </div>
    </div>
  </nav>
);
}

export default Nav;


