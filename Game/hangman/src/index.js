//Task:                Hangman
//Assigned to:         Admin
//Date assigned:       10th June 2023
//Due date:            10th June 2023
//Task complete?       Yes
//Task description:    Create an game called Hangman

// I used hackernoon to help with this task.
// https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral

// I also used the video below to help redo this task.
// https://www.youtube.com/watch?v=-ONUyenGnWw
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {wordPicker} from "./wordPicker";

// Below are the supplied images.
import construct1 from "./images/state1.jpg";
import construct2 from "./images/state2.jpg";
import construct3 from "./images/state3.jpg";
import construct4 from "./images/state4.jpg";
import construct5 from "./images/state5.jpg";
import construct6 from "./images/state6.jpg";
import construct7 from "./images/state7.jpg";
import construct8 from "./images/state8.jpg";
import construct9 from "./images/state9.jpg";
import construct10 from "./images/state10.jpg";
import construct11 from "./images/state11.jpg";


class Game extends Component {

  static defaultProps = {
    limit: 10,
    images: [construct1, construct2, construct3, construct4, construct5, construct6, construct7, construct8, construct9, construct10, construct11]
  }

  constructor(props) {
    super(props);
    this.state = {
      wrongAttempts: 0,
      words: new Set([]),
      defaultProps: new Set([]),
      response: wordPicker()
    }
  }

  // Below is creating the hidden word that the user must guess.
  makeWord() {
    return this.state.response.split("").map(character => (this.state.words.has(character) ? character : " _ "));
  }

  // Below controls the letter input.
  manage = e => {
    let character = e.target.value;
    this.setState(string => ({
      words: string.words.add(character),
      wrongAttempts: string.wrongAttempts + (string.response.includes(character) ? 0 : 1)
    }));
  }

  // Below is the game restart button.
  restart = () => {
    window.location.reload();
  }

  // Below generates the keyboard.
  createKeyboard() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(character => (
      <button key={character} value={character} onClick={this.manage} disabled={this.state.words.has(character)}>
        {character}
      </button>
    ));
  }

  // Below is the help button, that when is clicked on instructs the user how to play.
  help() {
    let str = "This is hangman, in order to win you need to guess the hidden word before you run out of tries.";
    document.getElementById('help').innerHTML = str;
  }


  render() {
    let endGame = this.state.wrongAttempts >= this.props.limit;
    let result = this.createKeyboard();
    let win = this.makeWord().join("") === this.state.response;

    // Below are my if statements to determine if you win or lose.
    if (win) {
      result = "You have won!";
    }

    if (endGame) {
      result = "You have lost!";
    }

    return (
      <div className="body">
        <h1> Hangman </h1>
        <div>
          <img src={this.props.images[this.state.wrongAttempts]} alt='' />
        </div>
        <div>
          <p> Try to guess the word! </p>
          <p>
            {!endGame ? this.makeWord() : this.state.response}
          </p>
          <p>
            {result}
          </p>
          <button onClick={this.help}> If you need help click on me! </button>
          <br/><br/>
          <button onClick={this.restart}> Restart Game </button>
          <br/><br/>
          <p id='help'></p>
        </div>
      </div>
    )
  }
}

export default Game;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);