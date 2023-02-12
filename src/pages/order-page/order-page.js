import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item/order-item';
import { currency, totalPrice } from '../../Functions/addFunctions';
import './order-page.css';

export const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart);

	return (
		<div className='order-page page'>
			<div className='order-page__container container'>
				{
					items.length ? 
						<div className='order-page__wrapper'>
							<div className='order-page__items'>
								{items.map(game => <OrderItem game={game} key={game.title}/>)}
							</div>
							<div className='order-page__footer'>
								<div className='order-page__quantity'>
								Quantity of goods <span>{items.length}</span>
								</div>
								<div className='order-page__total'>
								The total amount is <span>{currency(totalPrice(items))}</span>
								</div>
							</div>
						</div> : 
						<div className='order-page__empty'>
							<p className='order-page__empty-text'>The list of orders is empty</p>
							<div className='order-page__empty-link btn btn-primary btn-small'>
								<Link to="/">
									Go to shopping
								</Link>
							</div>
						</div>
				}
			</div>
		</div>
	)
};