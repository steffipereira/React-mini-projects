const Square = ({ value, onClick }) => {
  return (
    <button
      className="btn border border-primary btn-white rounded-0 font-weight-bold"
      onClick={onClick}
    >
      {value}
    </button>
   );
}

export default Square;
