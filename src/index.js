import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/style.css';
import Header from './Header'
import Navbar from './Navbar'
import Me from './Me'
import Work from './Work'
import Projects from './Projects'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Me />, document.getElementById('me'));
ReactDOM.render(<Work />, document.getElementById('work'));
ReactDOM.render(<Projects />, document.getElementById('projects'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
