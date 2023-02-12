import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartActions } from '../cart-actions/cart-actions'
import { CartMenu } from '../cart-menu/cart-menu'
import './cart.css'

export const Cart = () => {
	const [isCartMenu, setIsCartMenu] = useState(false)
	const items = useSelector((state) => state.cart.itemsInCart)
	const navigate = useNavigate();

	const orderCheckout = useCallback(() => {
		setIsCartMenu(false);
		navigate('/order');
	}, [navigate]);

	return (
		<div className="cart">
			<CartActions items={items} isCartMenu={isCartMenu} setIsCartMenu={setIsCartMenu}/>
			{isCartMenu && <CartMenu items={items} onClick={orderCheckout} />}
		</div>
	)
}
