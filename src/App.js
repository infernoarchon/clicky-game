import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Msg from './components/Msg'
import cards from './cards.json'

// CommonJS:
// const AnimateOnChange = require('react-animate-on-change').default
 
class App extends Component {
  state = {
    cards,
    score: [],
    highscore: [],
    clickedcards: [],
    message: []
  };
  
  componentDidMount() {
    this.randomizeCards()
    this.setState({score: 0})
    this.setState({highscore: 0})
  }

  randomizeCards = () => {

    var cardcontainer = document.querySelector('.card-area');
    for (var i = cardcontainer.children.length; i >= 0; i--) {
        cardcontainer.appendChild(cardcontainer.children[Math.random() * i | 0]);
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.randomizeCards()
    this.handleCard(e.target.getAttribute('data-id'))
  }

  handleCard = id => {
    this.state.clickedcards.includes(id) ? this.resetGame() : this.incrementCount(id)
  };

  resetGame = () => {
    this.setState((state) => {return {message: "incorrect"}})
    this.resetScore()
    this.setState((state) => {return {clickedcards: []}})
  }


  incrementCount = (id) => {
    this.setState((state) => {return {message: "correct"}})
    this.state.clickedcards.push(id)
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {score: state.score + 1}
    })
    this.state.score >= this.state.highscore ? this.setHighScore() : console.log("high score increased")

  }

  setHighScore = () => {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {highscore: state.score}
    })
  }

  resetScore = () => {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {score: 0}
    })
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="score-container row d-flex justify-content-between">
          <div className="score-left col">
            Score: {this.state.score} 
          </div>
          <div className="game-msg col">
          <Msg message={this.state.message} />
          </div>
      
          <div className="score-right col">
            High Score: {this.state.highscore} 
          </div>
        </div>
        <div className="card-area card-columns">
            {this.state.cards.map(card =>
            <div className="card-wrap">
            <Card
              id = {card.id}
              key = {card.id}
              image={card.image}
              color={card.color}
              onClick={this.handleClick}
            />
            </div>
            )}

            </div>
  
      </div>
    );
  }
}

export default App;
