import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { currency } from "../../Functions/addFunctions";
import { deleteItemFromCart } from "../../redux/cart/reduser";
import { GameCover } from "../game-cover";
import './order-item.css';

export const OrderItem = ({ game }) => {
	const dispatch = useDispatch();

	const delOrderItem = () => {
		dispatch(deleteItemFromCart(game.id));
	}

	return (
		<div className="order-item">
			<div className="order-item__cover">
				<GameCover image={game.image}/>
			</div>
			<div className="order-item__info">
				<h2 className="order-item__title">{game.title}</h2>
				<div className="order-item__wrapper">
					<div className="order-item__price">{currency(game.price)}</div>
					<RiDeleteBin6Line size={25} className="order-item__delete" onClick={delOrderItem}/>
				</div>
			</div>
		</div>
	)
};