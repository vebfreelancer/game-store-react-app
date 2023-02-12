import {
	Routes,
	Route
} from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { GamePage } from './pages/game-page';
import { OrderPage } from "./pages/order-page/order-page";
import { Footer } from "./components/footer/footer";
import { Error } from "./pages/error/error";

function App() {
	return (
		<div className="wrapper">
			<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/app/:title" element={<GamePage />} />
				<Route path="/order" element={<OrderPage />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;