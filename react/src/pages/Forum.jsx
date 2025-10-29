import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faChildren, faDiamond, faJetFighter, faMasksTheater, faPeopleRoof, faChess, faChampagneGlasses, faDiceD6, faShirt } from "@fortawesome/free-solid-svg-icons";

class Forum extends React.Component{
	render(){
		return(
			
			<main className="grey_backg">
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

				<div className="forum_wrapper">
					<div className="forum_head_container">
						<h1>Forum</h1>
						<div className="forum_search_bar">
							<input type="text" placeholder="Sök i forumen" className="form_search_field" />
							<button>
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>
						</div>
					</div>
					<div className="table_container">
						<table className="forum_table">
							<tr>
								<th	className="th1">Forum</th>
								<th>Antal trådar</th>
								<th>Antal inlägg</th>
								<th className="th1">Senaste inlägget</th>
							</tr>
							<tr>
								<td className="td1"><span className="forum_link">Allmänt om brädspel, kortspel och rollspel</span><br />Här kan du diskutera allmänt om brädspel, kortspel och rollspel. Skriv din egen topplista etc.</td>
								<td className="td2">383</td>
								<td className="td2">1253</td>
								<td><span className="forum_link">Spelgrupp i Umeå sökes</span><br />2025-02-06 09:43:43 <span className="forum_link">[NowakG]</span></td>
							</tr>
							<tr>
								<td className="td1"><span className="forum_link">Brädspel att spela på internet eller ladda ner</span><br />Det finns ett antal brädspel som man kan spela på internet eller ladda ner och spela. Här diskuteras dessa.</td>
								<td className="td2">45</td>
								<td className="td2">69</td>
								<td><span className="forum_link">Keyforge: Tokens</span><br />2025-02-04 12:44:37 <span className="forum_link">[HelmerCarlsson]</span></td>
							</tr>
							<tr>
								<td className="td1"><span className="forum_link">Butiken i Umeå</span><br />Diskussioner och information om vår Butik i Umeå.</td>
								<td className="td2">33</td>
								<td className="td2">112</td>
								<td><span className="forum_link">Skadade spel</span><br />2025-02-09 12:01:51 <span className="forum_link">[Anders89]</span></td>
							</tr>
							<tr>
								<td className="td1"><span className="forum_link">Förslag på sällskapsspel/brädspel som du saknar i butiken</span><br />Här kan ni skriva om det är något ni skulle vilja ha på hemsidan, det kan handla om spelforum till något spel, spel ni vill att vi ska försöka ta in och sälja, andra forum, etc.</td>
								<td className="td2">1729</td>
								<td className="td2">5320</td>
								<td><span className="forum_link">Darkest Night 2nd edition</span><br />2025-02-15 21:05:52 <span className="forum_link">[Anders89]</span></td>
							</tr>
							<tr>
								<td className="td1"><span className="forum_link">Nyheter</span><br />På detta forum finner du nyheter om brädspel, kortspel och sådant.</td>
								<td className="td2">106</td>
								<td className="td2">220</td>
								<td><span className="forum_link">Hej på er alla.</span><br />2025-01-13 09:47:25 <span className="forum_link">[Elvis22]</span></td>
							</tr>
							<tr>
								<td className="td1"><span className="forum_link">Pussel</span><br />Diskutera allt möjligt om pussel.</td>
								<td className="td2">9</td>
								<td className="td2">21</td>
								<td><span className="forum_link">Varför?</span><br />2019-11-02 14:31:27 	<span className="forum_link">[lubic]</span></td>
							</tr>
						</table>
					</div>
				</div>
			</main>
		)
	}
}

export default Forum;