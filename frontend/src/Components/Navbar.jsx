import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    state = {}
    render() {
        return (<div className='container-fixed'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" >Weather</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className='nav-link'>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>);
    }
}

export default Navbar;