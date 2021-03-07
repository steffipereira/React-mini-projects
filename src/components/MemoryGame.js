import Game from './MemoryGameApp/Game'
import useFetch from '../hooks/useFetch';

const MemoryGame = () => {
  const { data:cards } = useFetch('http://localhost:8000/memory')
  return (
    <div className="container d-flex align-items-center flex-column">
      <p className="pt-2">Find the matching pairs</p>
      <Game cards={cards}/>
    </div>
   );
}

export default MemoryGame;
