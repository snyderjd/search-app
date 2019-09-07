import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchApp from './components/SearchApp';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Router>
        <SearchApp />
    </Router>
    , document.getElementById('root'));
