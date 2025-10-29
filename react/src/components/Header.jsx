import React from 'react';
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faCartShopping} from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>W<span className="colored_o">o</span>BG</h1>
				<div className="search_bar">
					<input type="text" placeholder="Sök bland över 4000 sällskapsspel" />
					<button>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>			
				</div>

				<div className="icon_container">
					<Link to="/inloggning">
						<div className="icon_link">
							<FontAwesomeIcon icon={faUser} />
							<p> Logga in</p>
						</div>
					</Link>
					<Link to="/kassa" id="shoppingcart_icon">
						<div className="icon_link">
						<FontAwesomeIcon icon={faCartShopping} />
							<p>Varukorg</p>
						</div>
					</Link>
				</div>
			</header>
		);
	}
}

export default Header;