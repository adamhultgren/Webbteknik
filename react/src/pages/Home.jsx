import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faChildren, faDiamond, faJetFighter, faMasksTheater, faPeopleRoof, faChess, faChampagneGlasses, faDiceD6, faShirt, faChevronRight, faHeart, faTrophy, faCrown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { scrollbtn } from "../utils/scrollbtn";


class Home extends React.Component{
	componentDidMount(){
		scrollbtn();
	}
	render(){
		return ( 	
		<main>
			<nav className="navbar">
				<div className="navbar_container">
					<ul className="navbar_menu">
					<li className="navbar_item" id="Erbjudanden">
						<Link to="">
							<FontAwesomeIcon icon={faTag} id="Erbjudanden_ikon"/>
							<p>Erbjudanden</p>
						</Link>
						<li>
						<ul className="dropdown_menu">
							<li className="dropdown_item">
							<p className="listh1">Kategori</p>
							<ul>
								<li><Link to="">2-Spelare</Link></li>
								<li><Link to="">Pussel</Link></li>
								<li><Link to="">Tärningsspel</Link></li>
								<li><Link to="">Bluff</Link></li>
								<li><Link to="">Musik</Link></li>
							</ul>
							</li>
							<hr className="rounded" />
							<li className="dropdown_item">
							<p className="listh1">Serie</p>
							<ul>
								<li><Link to="">Bingo</Link></li>
								<li><Link to="">Exit</Link></li>
								<li><Link to="">Monopol</Link></li>
								<li><Link to="">Uno</Link></li>
								<li><Link to="">Ticket to ride</Link></li>
							</ul>
							</li>
							<hr className="rounded" />
							<li className="dropdown_item">
							<p className="listh1">Tillverkare</p>
							<ul>
								<li><Link to="">Alga</Link></li>
								<li><Link to="">Amigo</Link></li>
								<li><Link to="">Hasbro</Link></li>
								<li><Link to="">Gigamic</Link></li>
								<li><Link to="">Brädspel.se</Link></li>
							</ul>
							</li>
						</ul>
						</li>
					</li>
					<li className="navbar_item">
						<Link to="" id="Barnspel">
						<FontAwesomeIcon icon={faChildren} />
						<p>Barnspel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Kortspel">
						<FontAwesomeIcon icon={faDiamond} />
						<p>Kortspel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Krigsspel">
						<FontAwesomeIcon icon={faJetFighter} />
						<p>Krigsspel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Rollspel">
						<FontAwesomeIcon icon={faMasksTheater} />
						<p>Rollspel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Familjespel">
						<FontAwesomeIcon icon={faPeopleRoof} />
						<p>Familjespel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Strategispel">
						<FontAwesomeIcon icon={faChess} />
						<p>Strategispel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Vuxen/Partyspel">
						<FontAwesomeIcon icon={faChampagneGlasses} />
						<p>Vuxen/Partyspel</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Tillbehör">
						<FontAwesomeIcon icon={faDiceD6} />
						<p>Tillbehör</p>
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" id="Merchandise">
						<FontAwesomeIcon icon={faShirt} />
						<p>Merchandise</p>
						</Link>
					</li>
					</ul>
				</div>
			</nav>

			<div className="add_container">
				<div className="addpic_container">
					<img src="./src/Bilder/Användbar.png" alt="Reklambild" />
				</div>
				<div className="addtext_container">
					<p>Upptäck årets mest efterlängtade spel!</p>
					<button>Läs mer här</button>
				</div>
			</div>

			<div className="smallheadline_text_container">
				<h2>Erbjudanden</h2>
			</div>
			<div className="item_wrapper">
				<button className="scroll_button">
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
				<div className="big_item_container">
					<div id="dragbar_item_container" className="single_item_container">
						<div className="item_img_container">
							<Link to="/produktsida">
								<img id="dragbarbild" src="./src/Bilder/Catan_produktsida.png" alt="item_pic"/>
							</Link>
						</div>
						<div className="item_text_container">
							<Link to="/produktsida">
								<p>Catan (Settlers of Catan) <br />(SVE)</p>
							</Link>
						</div>
						<div className="offer_item_price_container">
							<p><del>449 kr</del><br /><span className="discount_text">385 kr</span></p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/peek-a-mouse.jpg" alt="item_pic" id="pic_peek-a-mouse" />
						</div>
						<div className="item_text_container">
							<p>Peek-a-Mouse (SVE)</p>
						</div>
						<div className="offer_item_price_container">
							<p><del>349 kr</del><br /><span className="discount_text">149 kr</span></p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/SMART10.jpg" alt="item_pic" id="pic_smart10" />
						</div>
						<div className="item_text_container">
							<p>Smart10 (SVE)</p>
						</div>
						<div className="offer_item_price_container">
							<p><del>295 kr</del><br /><span className="discount_text">249 kr</span></p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/Troll_Mania.jpg" alt="item_pic" id="pic_trollmania" />
						</div>
						<div className="item_text_container">
							<p>Troll Mania</p>
						</div>
						<div className="offer_item_price_container">
							<p><del>219 kr</del><br /><span className="discount_text">129 kr</span></p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/Kontour.jpg" alt="item_pic" id="pic_kontour" />
						</div>
						<div className="item_text_container">
							<p>Kontour (SVE)</p>
						</div>
						<div className="offer_item_price_container">
							<p><del>149 kr</del><br /><span className="discount_text">119 kr</span></p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/pictures.jpg" alt="item_pic" id="pic_pictures" />
						</div>
						<div className="item_text_container">
							<p>Pictures (SVE)</p>
						</div>
						<div className="offer_item_price_container">
							<p><del>395 kr</del><br /><span className="discount_text">349 kr</span></p>
							<button type="button">Köp</button>
						</div>
					</div>
				</div>
			</div>

			<div className="smallheadline_text_container">
				<h2>Nyheter</h2>
			</div>
			<div className="item_wrapper">
				<button className="scroll_button">
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
				<div className="big_item_container">
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/7wonders.jpg" alt="pic_7wonders" id="pic_7wonders" />
						</div>
						<div className="item_text_container">
							<p>7 Wonders</p>
						</div>
						<div className="news_item_price_container">
							<p>449 kr</p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/azul.jpg" alt="item_pic" id="pic_azul" />
						</div>
						<div className="item_text_container">
							<p>Azul (SVE)</p>
						</div>
						<div className="news_item_price_container">
							<p>425 kr</p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/cascadia.jpg" alt="item_pic" id="pic_cascadia" />
						</div>
						<div className="item_text_container">
							<p>Cascadia (SVE)</p>
						</div>
						<div className="news_item_price_container">
							<p>375 kr</p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/rolling_realms_redux.jpg" alt="item_pic" id="pic_rollingrealms" />
						</div>
						<div className="item_text_container">
							<p>Rolling Realms Redux</p>
						</div>
						<div className="news_item_price_container">
							<p>279 kr</p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/terraformingmars.jpg" alt="item_pic" id="pic_terraformingmars" />
						</div>
						<div className="item_text_container">
							<p>Terraforming Mars (SVE)</p>
						</div>
						<div className="news_item_price_container">
							<p>549 kr</p>
							<button type="button">Köp</button>
						</div>
					</div>
					<div className="single_item_container">
						<div className="item_img_container">
							<img src="./src/Bilder/wingspan.png" alt="item_pic" id="pic_wingspan" />
						</div>
						<div className="item_text_container">
							<p>Wingspan</p>
						</div>
						<div className="news_item_price_container">
							<p>699 kr</p>
							<button type="button">Köp</button>
						</div>
					</div>
				</div>
			</div>
			<div className="item_wrapper">
				<div className="category_container">
					<Link to="">
						<div className="single_category_container">
							<h2>Alla hjärtans dag</h2>
							<FontAwesomeIcon icon={faHeart} />
						</div>
					</Link>	
					<Link to="">
						<div className="single_category_container">
							<h2>Bästsäljare</h2>
							<FontAwesomeIcon icon={faTrophy} />
						</div>
					</Link>
					<Link to="">
						<div className="single_category_container">
							<h2>Vi rekommenderar</h2>
							<FontAwesomeIcon icon={faCrown} />
						</div>
					</Link>
				</div>
			</div>
			<button id="pagetopbtn"><FontAwesomeIcon icon={faArrowUp} /></button>
		</main>
		);
	}
}

export default Home; 