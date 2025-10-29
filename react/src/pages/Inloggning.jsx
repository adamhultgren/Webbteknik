import React from "react";
import { Link } from "react-router";

class Inloggning extends React.Component {
	render(){
		return(		
			<div className="blank_page">
				<main>
					<div className="login_container">
						<div className="login_headline">
							<h1>World<span className="colored_letters">of</span>Boardgames<span className="colored_letters">.com</span></h1>
						</div>
						<div className="login_form_container">
							<form>
								<h2>Inloggning</h2>
								<div className="input_container">
									<input type="text" placeholder="E-post" required />
								</div>
								<div className="input_container">
									<input type="password" placeholder="Lösenord" required />
								</div>
								<div className="login_pass_info">
									<label>
										<input type="checkbox" /> Kom ihåg mig
									</label>
									<Link to="">
										Glömt ditt lösenord?
									</Link>
								</div>
								<div className="login_alt">
									<input type="submit" className="login_submit" value="Logga in" />
									<div className="reg_link">
										<p>Har du inget konto?</p>
										<Link to="">Registrera</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default Inloggning; 