import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const values= ['2','3','4','5','6','7','8','9','A','J','K','Q'];
  const suits= ['♣','♠','♥','♦'];

  const randomValue= ()=> {
   const index= Math.floor(Math.random()* values.length);
   return values[index]
  }
  const randomSuits= ()=> {
    const index= Math.floor(Math.random()* suits.length);
    return suits[index]
  }
console.log(randomValue(), randomSuits())


  const suitColor = (suit) => {
    if (suit === '♥' || suit === '♦') {
      return 'color: red';
    } else if (suit === '♣' || suit === '♠') {
      return 'color: black'; 
    } 
  };

const drawCard = ()=> {
  const drawnValue= randomValue();
  const drawnSuit= randomSuits();
  const suitStyle= suitColor(drawnSuit);
  document.querySelector('.top-suit').innerHTML= `<span style="${suitStyle}">${drawnSuit}</span>`;
  document.querySelector('.value').innerHTML= drawnValue;
  document.querySelector('.bottom-suit').innerHTML= `<span style="${suitStyle}">${drawnSuit}</span>`;
  
}
 
const dispalyCard= ()=>{
  let dispalyedCard = document.querySelector('.card');
  dispalyedCard.innerHTML = 
   `<div class= "suit top-suit"></div>
    <div class= "value text-center"></div>
    <div class= "suit bottom-suit d-flex justify-content-end"></div>`
  drawCard();
}
dispalyCard();
//click the button to draw a new card
//document.querySelector('.btn').addEventListener('click', dispalyCard);
//adding a timer to draw a new card every 10sec
let count = 9;

setInterval(() => {
  // Update the timer display
  if (count === -1) {
    count = 10;
  }
  document.querySelector('#timer-display').innerHTML = count--;
  // When the timer hits 0, draw a card
  if (count === -1) {
    drawCard();
  }
}, 1000);
}
