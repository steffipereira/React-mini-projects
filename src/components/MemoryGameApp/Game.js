import { useState } from 'react'

const Game = ({ cards }) => {
  const [matched, setMatch] = useState(false)
  let cardsList = []
  const handleCard = (e) => {
    let card = e
    card.target.classList.remove('card-img-flip')
    card.target.classList.add('card-img-unflip')
    cardsList.push(card)

    function resetCards(cards) {
      setTimeout(() => {
        cards.forEach(card => {
        card.target.classList.remove('card-img-unflip')
        card.target.classList.add('card-img-flip')
        })
      }, 500);

    }
    function compareCards(card1, card2) {
      if(card1.target.src === card2.target.src) {
        return true
      }
      resetCards(cardsList)
      return false
    }

    if(cardsList.length === 2) {
      compareCards(cardsList[0], cardsList[1])
      cardsList = []
      return true
    }

    let allImages = document.getElementsByClassName('d-none')

    if(allImages.length >= 14) {
      setMatch(true)
    }

  }
  return (
    <div className="row w-50 pt-3">
      {
        cards && cards
          .sort(() => Math.random() - 0.5)
          .map(card => (
            <div className="col-3 py-2" key={card.id}>
              <div className="card">
                <div>
                  <img className="card-img-top card-img-flip" src={card.url} alt={card.id} onClick={handleCard} />
                </div>
              </div>
            </div>
          )
        )
      }
      <div className="container d-flex align-items-center flex-column py-3">
        {matched && <h3 className="text-info"> You Won!! </h3>}
      </div>
    </div>
   );
}

export default Game;
