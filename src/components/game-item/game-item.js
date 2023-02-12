import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reduser';
import { GameCover } from '../game-cover/game-cover';
import { GameGenre } from '../genre/game-genre';
import { GameBuy } from '../game-buy/game-buy';
import './game-item.css';

export const GameItem = ({ game }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setCurrentGame(game));
		navigate(`/app/${game.title}`);
	}
    
	return (
		<div className='cards-item' onClick={handleClick} aria-hidden="true">
			<GameCover image={game.image}/>
			<div className='cards-item__info'>
				<h3 className='cards-item__title'>
					{game.title}
				</h3>
				<div className="cards-item__genres">
					{game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
				</div>
				<GameBuy game={game}/>
			</div>
		</div>
	)
};