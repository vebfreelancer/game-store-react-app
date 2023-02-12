import './game-cover.css';

export const GameCover = ({ image = '' }) => {
	return (
		<img src={image} className='cards-item-cover' alt="Game Cover"/>
	)
};