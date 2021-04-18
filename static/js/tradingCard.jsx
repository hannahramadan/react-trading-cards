var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

function TradingCard(props) {
  let image = props.imgUrl;

  if (image != null) {
    image = image}
    else {
      image = '/static/img/placeholder.png'
  };

  console.log(props)
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={image} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() {

  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => {
    fetch('/cards.json')
    .then((response) => response.json())
    .then((data) => updateCards(data.cards))
  }, [])

  const tradingCards = [];

  let idx = 0;
  
  for (const currentCard of cards) {
    tradingCards.push(
      <TradingCard
        key={idx++}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );

}

// function TradingCardContainer() {

//   const [cards, updateCards] = React.useState([]);

//   React.useEffect(() => {
//     fetch('/cards.json')
//     .then((response) => response.json())
//     .then((data) => updateCards(data))
//   }, [])
  
//   // const floatCard = {
//   //     name: 'Float',
//   //     skill: 'baking pretzels',
//   //     imgUrl: '/static/img/float.jpg'
//   //   };

//   const tradingCards = [ ];
//   // updateTradingCards()

//   for (const currentCard of cards) {
//     tradingCards.push(
//       <TradingCard
//         key={currentCard.name}
//         name={currentCard.name}
//         skill={currentCard.skill}
//         imgUrl={currentCard.imgUrl}
//       />
//     );
//   }

//   return (
//     <div>{tradingCards}</div>
//   );
// }

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
