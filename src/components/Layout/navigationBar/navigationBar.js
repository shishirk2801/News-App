import React, { Component } from 'react';
import classes from './navigationBar.module.css';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
	componentDidMount() {
		this.toggle();
	}
	toggle = () => {
		let mainNav = document.getElementById('jsMenu');
		let navBarToggle = document.getElementById('jsNavbarToggle');

		navBarToggle.addEventListener('click', function() {
			mainNav.classList.toggle(classes.active);
		});
	};
	render() {
		return (
			<div>
				<nav className={classes.navbar}>
					<span className={classes.navbarToggle} id="jsNavbarToggle">
						+
					</span>
					<a href="/" className={classes.logo}>
						NEWS
					</a>
					<ul className={classes.mainNav} id="jsMenu">
						<li>
							<NavLink to="/" exact className={classes.navLinks} activeStyle={{ color: 'white' }}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/Bookmark" className={classes.navLinks} activeStyle={{ color: 'white' }}>
								Bookmarks
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
