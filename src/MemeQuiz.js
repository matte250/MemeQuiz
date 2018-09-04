import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';

class MemeQuiz extends Component {
  render() {
    return (
      <div>
        <div>
          Meme Quiz
        </div>
        <div>
          <Sum a={5} b={"a"} />
        </div>
        <ClickCount />
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

export default MemeQuiz;
