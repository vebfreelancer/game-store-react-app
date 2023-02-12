import { currency } from '../../Functions/addFunctions';
import './cart-item.css';


export const CartItem = ({ title, price, id }) => {
	return (
		<li className="cart-item">
			<h4 className='cart-item__title'>{title}</h4>
			<div className="cart-item__price">{currency(price)}</div>
		</li>
	)
}
