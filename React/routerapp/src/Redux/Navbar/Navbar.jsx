import React from 'react';

let Navbar=()=>{
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">aCoder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="./">Home</a>
              <a className="nav-link" href="./">Srvices</a>
              <a className="nav-link" href="./">About Us</a>
              <a className="nav-link" href="./">Contact Us </a>
             
            </div>
          </div>
        </div>
      </nav>
      </React.Fragment>
    )
}
export default Navbar;