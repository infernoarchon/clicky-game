import React, { Component } from 'react';
import logo from './logo.svg';
import Jumbotron from './components/Jumbotron'
import './App.css'
import Card from './components/Card'
import cards from './cards.json'

class App extends Component {
  state = {
    cards
  };
  componentDidMount() {
    this.randomizeCards()
  }

  randomizeCards = () => {
    console.log(this.state.cards)

    var cardcontainer = document.querySelector('.card-area');
    for (var i = cardcontainer.children.length; i >= 0; i--) {
        cardcontainer.appendChild(cardcontainer.children[Math.random() * i | 0]);
    }
  }

  handleClick = () => {
    this.randomizeCards()
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="card-area card-columns">
            {this.state.cards.map(card =>
            <div className="card-wrap" onClick={this.handleClick}>
            <Card
              id = {card.id}
              key = {card.id}
              image={card.image}
              color={card.color}
            />
            </div>
            )}

            </div>
  
      </div>
    );
  }
}

export default App;
