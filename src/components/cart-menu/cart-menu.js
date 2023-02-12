import { totalPrice, currency } from '../../Functions/addFunctions'
import { CartItem } from '../cart-item/cart-item'
import { Button } from '../button/button'
import './cart-menu.css'

export const CartMenu = ({ items, onClick }) => {
	return (
		<div className="cart-menu">
			{items.length > 0 ? (
				<ul className="cart-menu__list">
					{items.map((game) => (
						<CartItem
							key={game.title}
							price={game.price}
							title={game.title}
							id={game.id}
						/>
					))}
				</ul>
			) : (
				<p className='cart-menu__empty-list'>The list of orders is empty</p>
			)}

			{items.length > 0 ? (
				<div className="cart-menu__arrange">
					<div className="cart-menu__total-price">
						<span>Total:</span>
						<span>{currency(totalPrice(items))}</span>
					</div>
					<Button type="primary" size="m" onClick={onClick}>
                        Checkout
					</Button>
				</div>
			) : null}
		</div>
	)
}
