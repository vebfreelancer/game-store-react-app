import { useSelector } from 'react-redux';
import { GameCover } from '../../components/game-cover';
import { GameGenre } from '../../components/genre';
import { GameBuy } from '../../components/game-buy';
import './game-page.css';

export const GamePage = () => {
	const game = useSelector(state => state.game.currentGame);

	if (!game) return null;

	return (
		<div className='game-page page'>
			<div className='game-page__container container'>
				<h1 className="game-page__title">{game.title}</h1>
				<div className="game-page__content">
					<div className="game-page__video">
						<iframe 
							src={game.video}
							id="game-video"
							title="Youtube Video Player"
							frameBorder="0" />
					</div>
					<div className="about-game">
						<div className='about-game__cover'>
							<GameCover image={game.image}/>
						</div>
						<div className='about-game__wrapper'>
							<p className='about-game__description'>{game.description}</p>
							<p className='about-game__secondary-text'>Popular product tags</p>
							<div className='about-game__genres'>
								{game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)}
							</div>
							<div className="about-game__buy-game">
								<GameBuy game={game}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};