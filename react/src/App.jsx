import Home from "./pages/Home";
import Produktsida from "./pages/Produktsida";
import Inloggning from "./pages/Inloggning";
import Kassa from "./pages/Kassa";
import Forum from "./pages/Forum";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
	return (
	  <Router>
		<Routes>
		  <Route exact path="/" element={<><Header /> <Home /> <Footer /></>}/>
		  <Route path="/produktsida" element={<><Header /> <Produktsida /> <Footer /></>}/>
		  <Route path="/inloggning" element={<Inloggning />}/>
		  <Route path="/kassa" element={<><Kassa /> <Footer /></>}/>
		  <Route path="/forum" element={<><Header /> <Forum /> <Footer /></>}/>
		</Routes>
	  </Router>
	);
  }

export default App;
