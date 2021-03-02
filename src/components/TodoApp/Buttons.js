import { Button } from 'react-bootstrap'

const Buttons = ({ setButtons, text }) => {
  return (
    <Button
      variant="primary"
      className="mb-3 btn-sm mr-2"
      onClick={()=> setButtons(text)}
    >
      {text}
    </Button>
  );
}

export default Buttons;
