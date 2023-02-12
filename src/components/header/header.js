import { Link } from 'react-router-dom'
import { Cart } from '../cart/cart'
import './header.css'

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__flex-wrap">
					<div className="header__logo">
						<Link to="/" className="header__logo-link logo">
                            Game Store
						</Link>
					</div>
					<div className="header__cart">
						<Cart />
					</div>
				</div>
			</div>
		</header>
	)
}
