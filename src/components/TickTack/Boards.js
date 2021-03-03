import Square from "./Square"

const Boards = ({ squares, onClick}) => {
  const style = {
    borderRadius: "10px",
    width: "150px",
    height: "150px",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

  return (
    <div className="d-flex flex-row">
      <div style={style}>
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={()=> onClick(index)} />
        ))}
      </div>
    </div>
   );
}

export default Boards;
