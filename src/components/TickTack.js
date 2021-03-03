import Game from "./TickTack/Game"

const TickTack = () => {
  return (
    <div className="mt-3">
      <div className="d-flex flex-column align-items-center">
        <h2>Tick tac</h2>
        <Game />
      </div>
    </div>
   );
}

export default TickTack;
