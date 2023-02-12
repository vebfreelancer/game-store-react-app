import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reduser'
import { currency } from '../../Functions/addFunctions'
import { Button } from '../button/button'
import './game-buy.css'

export const GameBuy = ({ game }) => {
	const dispatch = useDispatch()
	const items = useSelector((state) => state.cart.itemsInCart)
	const isItemInCart = items.some((item) => item.id === game.id)

	const handleClick = (event) => {
		event.stopPropagation()
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id))
		} else {
			dispatch(setItemInCart(game))
		}
	}

	return (
		<div className="cards-item__button">
			<span className="cards-item__price">{currency(game.price)}</span>
			<Button
				type={isItemInCart ? 'secondary' : 'primary'}
				onClick={handleClick}
			>
				{isItemInCart ? 'Delete' : 'To cart'}
			</Button>
		</div>
	)
}
