import { Link } from 'react-router-dom';
import './error.css'

export const Error = () => {
	return (
		<div className="error-page">
			<div className="error-page__container container">
				<div className='error-page__wrapper'>
					<h1 className='error-page__title'>404</h1>
					<div className='error-page__link btn btn-primary btn-small'>
						<Link to="/">
                        Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
};