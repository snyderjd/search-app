import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark">
                <ul className="container navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/video">Video</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/web">Web</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;



// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import './NavBar.css';

// class NavBar extends Component {

//     render() {

//         return (
//             <header>
//                 <h1 className="site-title">Student Kennels<br />
//                     <small>Loving care when you're not there.</small>
//                 </h1>
//                 <nav>
//                     <ul className="container">
//                         <li><Link className="nav-link" to="/">Home</Link></li>
//                         <li><Link className="nav-link" to="/animals">Animals</Link></li>
//                         <li><Link className="nav-link" to="/locations">Locations</Link></li>
//                         <li><Link className="nav-link" to="/employees">Employees</Link></li>
//                         <li><Link className="nav-link" to="/owners">Owners</Link></li>
//                     </ul>
//                 </nav>
//             </header>
//         )
//     }
// }
// export default NavBar;