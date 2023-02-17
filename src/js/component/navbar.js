import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar py-3 px-4 mb-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">My Café</span>
			</Link>

		</nav>
	);
};
