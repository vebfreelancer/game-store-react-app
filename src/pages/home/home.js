import dbGames from '../DBGames'
import { GameItem } from '../../components/game-item/game-item'
import './home.css'

export const Home = () => {
	return (
		<main className='page-content page'>
			<div className='container'>
				<div className="cards">
					{dbGames.map((game) => (
						<GameItem game={game} key={game.id} />
					))}
				</div>
			</div>
		</main>
	)
}
