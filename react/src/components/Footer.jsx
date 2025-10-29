import React from 'react';
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="information_container">
					<div className="information_column fixed_width">
						<h2>Kundtjänst</h2>
						<p>Om du har några frågor eller funderingar är det bara att höra av dig till oss.</p>
						<div className="information_links">
							<Link to="">
								<FontAwesomeIcon icon={faPhone} />
								<p>090 - 205 92 11</p>
							</Link>
						</div>
						<div className="information_links">
							<Link to="mailto:info@worldofboardgames.com">
								<FontAwesomeIcon icon={faEnvelope} />
								<p>info@worldofboardgames.com</p>
							</Link>
						</div>
						<div className="information_links address">
							<FontAwesomeIcon icon={faHouse} />
							<p>Björnvägen 11, 906 40 UMEÅ</p>
						</div>
					</div>
					<div className="information_column" id="text_column">
						<h2>Information</h2>
						<Link to="">Om oss</Link>
						<Link to="">Butiken i Umeå</Link>
						<Link to="">Fraktpriser och leveranser</Link>
						<Link to="">Köpvillkor</Link>
						<Link to="">Om Cookies</Link>
					</div>
					<div className="information_column" id="text_column">
						<h2>Hjälp och vägledning</h2>
						<Link to="">Topplistor</Link>
						<Link to="">Recensioner</Link>
						<Link to="">Presentkort</Link>
						<Link to="/forum">Forum</Link>
						<Link to="">Köp och säljmarknad</Link>
					</div>
				</div>
				<div className="bottom_container">
					<div className="twelvecolumn_container">
						<div className="bottom_container_text onethird">
							<p>En av Sveriges största butiker för brädspel/sällskapsspel och kortspel med över 4000 olika sällskapsspel i lager</p>
							<h2>World<span className="colored_letters">of</span>BoardGames<span className="colored_letters">.com</span></h2>
						</div>
						<div className="newsletter_container onethird">
							<h3>Prenumerera på vårt nyhetsbrev</h3>
							<div className="form_container">
								<form>
									<input type="text" name="email" placeholder="Din e-postadress..." className="email_field" />
									<input type="submit" name="submit-button" className="email_submit" value="Prenumerera" />
								</form>
							</div>
						</div>
						<div className="newsletter_logos onethird">
							<div className="logos_container">
								<img src="./src/Bilder/logos.png" alt="Logotyper" />
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;