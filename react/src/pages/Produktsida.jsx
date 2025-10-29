import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faChildren, faDiamond, faJetFighter, faMasksTheater, faPeopleRoof, faChess, faChampagneGlasses, faDiceD6, faShirt, faChevronRight, faChevronLeft, faClock, faPersonCane, faLanguage, faUser} from "@fortawesome/free-solid-svg-icons";

class Produktsida extends React.Component {
	render() {
		return(
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
				
				<div className="product_wrapper">
					<div className="product_visuals">
						<div className="big_img_container"><img src="./src/Bilder/Catan_produktsida.png" alt=""  id="big_pic" /></div>
						<div className="product_media_container">
							<div className="mediabar_container">
								<button id="scrollbtn1" className="scroll_button_mediabar">
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<img src="./src/Bilder/Catan_produktsida.png" alt="" className="small_img" />
								<img src="./src/Bilder/catan_produktbild.png" alt="" className="small_img" />
								<img src="./src/Bilder/catan_produktbild2.jpg" alt="" className="small_img" />
								<img src="./src/Bilder/catan_produktbild3.webp" alt="" className="small_img" />
								<button id="scrollbtn2" className="scroll_button_mediabar">
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
						</div>	
						<div className="product_meny_container">
							<div className="product_meny"><p>Produktbeskrivning</p><FontAwesomeIcon icon={faChevronRight} /></div>
							<div className="product_meny"><p>Innehållsförteckning</p><FontAwesomeIcon icon={faChevronRight} /></div>
							<div className="product_meny"><p>Recensioner (3)</p><FontAwesomeIcon icon={faChevronRight} /></div>
						</div>
					</div>
					<div className="product_info">
						<div className="product_name"><h1>Catan (Settlers of Catan) (SVE)</h1></div>
						<div className="product_rating">
							<img src="./src/Bilder/Rating.png" alt="" />
							<Link to=""><p>(86 Omdömen)</p></Link>
						</div>
						<div className="product_property_container">
							<div className="single_property_item"><FontAwesomeIcon icon={faUser} /><p>3-4 Spelare</p></div>
							<div className="single_property_item"><FontAwesomeIcon icon={faClock} /><p>120 Minuter</p></div>
							<div className="single_property_item"><FontAwesomeIcon icon={faPersonCane} /><p>10+ år</p></div>
							<div className="single_property_item"><FontAwesomeIcon icon={faLanguage} /><p>Svenska</p></div>
						</div>
						<div className="buy_info_container">
							<div className="buy_info_text">
								<div className="shipping_text">
									<p id="shipping_text1">I lager</p><p id="shipping_text2">Beräknad leveranstid 1-3 vardagar</p>
								</div>
								<div className="price_text">
									<p id="shipping_text3">449 kr</p><p id="shipping_text4">385 kr</p>
								</div>
							</div>
							<div className ="product_buy_button_container">
								<button type="button">Köp</button>
							</div>
						</div>
						<div className="video_container">
							<iframe width="560" height="315" src="https://www.youtube.com/embed/hxIdD248uaE?si=lHyR5WxOauZXzqri" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						</div>
					</div>
				</div>


				<div className="smallheadline_text_container">
					<h2>Expansioner till Catan</h2>
				</div>
				<div className="item_wrapper">
					<button className="scroll_button">
						<FontAwesomeIcon icon={faChevronRight} />
					</button>
					<div className="big_item_container">
						<div className="single_item_container">
							<div className="item_img_container">
								<Link to="produktsida.html">
									<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="item_pic" />
								</Link>
							</div>
							<div className="item_text_container">
								<Link to="produktsida.html">
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
								<Link to="produktsida.html">
									<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="item_pic" />
								</Link>
							</div>
							<div className="item_text_container">
								<Link to="produktsida.html">
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
								<Link to="produktsida.html">
									<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="item_pic" />
								</Link>
							</div>
							<div className="item_text_container">
								<Link to="produktsida.html">
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
								<Link to="produktsida.html">
									<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="item_pic" />
								</Link>
							</div>
							<div className="item_text_container">
								<Link to="produktsida.html">
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
								<Link to="produktsida.html">
									<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="item_pic" />
								</Link>
							</div>
							<div className="item_text_container">
								<Link to="produktsida.html">
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
								<Link to="produktsida.html">
									<img src="./src/Bilder/catan-settlers-of-catan.jpeg" alt="item_pic" />
								</Link>
							</div>
							<div className="item_text_container">
								<Link to="produktsida.html">
									<p>Catan (Settlers of Catan) <br />(SVE)</p>
								</Link>
							</div>
							<div className="offer_item_price_container">
								<p><del>449 kr</del><br /><span className="discount_text">385 kr</span></p>
								<button type="button">Köp</button>
							</div>
						</div>
					</div>
				</div>




				<div className="smallheadline_text_container">
					<h2>Personer som har köpt Catan (Settlers of catan) (SVE) har också köpt</h2>
				</div>
				<div className="item_wrapper">
					<button className="scroll_button">
						<i className="fa-solid fa-chevron-right"></i>
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
			</main>
		) 
	}
}

export default Produktsida;