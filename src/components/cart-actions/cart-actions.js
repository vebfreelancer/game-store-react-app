import { HiOutlineShoppingCart } from 'react-icons/hi'
import { currency, totalPrice } from '../../Functions/addFunctions'
import './cart-actions.css'

export const CartActions = ({ items, isCartMenu, setIsCartMenu }) => {
	const renderTotalPrice = totalPrice(items)
	return (
		<button
			type="button"
			className="cart__actions"
			onClick={() => setIsCartMenu(!isCartMenu)}
		>
			{renderTotalPrice > 0 ? (
				<span className="cart__total-price">
					{currency(renderTotalPrice)}
				</span>
			) : null}
			<span className="cart__icon">
				<HiOutlineShoppingCart size={30} />
			</span>
			{items.length > 0 ? (
				<span className="cart__count-indicator">{items.length}</span>
			) : null}
		</button>
	)
}
