import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className='footer'>
			<div className="footer__container container">
				<div className="footer__wrapper">
					<div className="footer__logo">
						<Link to="/" className="footer__logo-link logo">
                            Game Store
						</Link>
					</div>
					<div className='footer__text'>
						<span>&copy;</span>
						<ul className='footer__list'>
							<li>React Web App</li>
							<li>Redux</li>
							<li>Routing</li>
							<li>JSX</li>
							<li>JavaScript</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};