import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBasketShopping, faTruck, faCreditCard} from "@fortawesome/free-solid-svg-icons";

class Kassa extends React.Component{
	render(){
		return(
					
		 <div className="grey_backg">
			<header>
				<h1 id="h1size2">World<span className="colored_letters">of</span>Boardgames<span className="colored_letters">.com</span></h1>
			</header>
			<main>
				<div className="progress_wrapper">
					<div className="progress_container">
						<div className="progress_item" id="step1">
							<div className="progress_item_info" id="currentstep_item"><p>Varukorg</p><FontAwesomeIcon icon={faBasketShopping} /></div>
						</div>
						<div className="progress_item" id="step2">
							<div className="progress_item_info"><p>Leveransinformation</p><FontAwesomeIcon icon={faUser} /></div>
						</div>
						<div className="progress_item" id="step3">
							<div className="progress_item_info"><p>Leveransmetod</p><FontAwesomeIcon icon={faTruck} /></div>
						</div>
						<div className="progress_item" id="step4">
							<div className="progress_item_info"><p>Betalning</p><FontAwesomeIcon icon={faCreditCard} /></div>
						</div>
					</div>
				</div>
				<div className="checkout_container">
					<div className="customer_info_container">
						<div>
							<h1>Din varukorg</h1>
						</div>
						<div className="checkout_item_container">
							<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="" />
							<p>Catan Settlers of Catan (SVE)</p>
							<div className="checkout_item_quantity_container">
								<div className="checkout_item_quantity_object">-</div>
								<div className="checkout_item_quantity_object" id="quantity_number">1</div>
								<div className="checkout_item_quantity_object">+</div>
							</div>
							<p id="checkout_price">385:-</p>
						</div>
						
					</div>
					<div className="order_view_container">
						<h1>Orderöversikt</h1>
						<div className="order_view_info">
							<p>1 x Catan (Settlers of Catan) (SVE)</p><p>385 :-</p>
						</div>
						<div className="order_view_summation_container">
							<div className="summation_textbox">
								<p>Frakt</p><p>49 :-</p>
							</div>
							<div className="summation_textbox" id="bold_text">
								<p>Totalsumma</p><p>434 :-</p>
							</div>
						</div>
						<div className="checkout_next_btn">
							<button>Fortsätt</button>
						</div>
					</div>
				</div>
			</main>
			</div>
		)
	}
}

export default Kassa;