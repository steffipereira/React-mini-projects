import { Button } from 'react-bootstrap'

const Buttons = ({ setButtons, text }) => {
  const variant = text === 'completed' ? 'success' : text === 'pending' ? 'warning' : 'primary'
  return (
    <Button
      variant={variant}
      className="mb-3 btn-sm mr-2"
      onClick={()=> setButtons(text)}
    >
      {text}
    </Button>
  );
}

export default Buttons;
