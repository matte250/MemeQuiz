import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';
import _ from 'underscore'

const props = {a: 5,b: 7};

class MemeQuiz extends Component {
  render() {
    return (
      <div>
        <div>
          Meme Quiz
        </div>
        <div>

          <Sum {...props} />
        </div>
        <ClickCount />
        <Clicker handleClick={(letter, second) => {console.log(`${letter} ${second} clicked`);}}/>
        <ClickyButtons numberOfButtons={99} onSelection={console.log}/>
      </div>
    );
  }
}

class Sum extends React.Component {
  render() {
    return <h1>
      {this.props.a} + {this.props.b} = {this.props.a + this.props.b} also fk u mum
    </h1>
  }
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

class ClickCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  render() {
    return <div>
      This <button onClick={() => { this.setState({ clicks: this.state.clicks + 1 }); }}>
      button</button> has been clicked {this.state.clicks} times.
  </div>
  }
}

class Clicker extends React.Component {
  render(){
    return <div>
      <button onClick={(e) => {this.props.handleClick('A', 'Meme');}}>A</button>
      <button onClick={(e) => {this.props.handleClick('B', 'Lord');}}>B</button>
      <button onClick={(e) => {this.props.handleClick('C', 'Hah');}}>C</button>
    </div>
  }
}

function ClickyButtons({numberOfButtons, onSelection}){
  const makeButton = v => <button key={v} id={v} onClick={event => onSelection(event.target.id)}>{v}</button>
  return <div>
    {_.range(1, numberOfButtons + 1).map(makeButton)}
  </div>;
}

export default MemeQuiz;
