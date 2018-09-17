import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';
import _ from 'underscore'

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Meme Quiz</h1>
        <p>Select a meme</p>
      </div>
    </div>
  )
}

function Awnser({awnser}) {
  return (
    <div className="awnser">
    <h4>{awnser}</h4>
    </div>
  )
}

function Turn({meme, awnsers}){
  return(
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1 authorimageparent">
        <img src={meme.imageUrl} className="authorimage" alt="meme"/>
      </div>
      <div className="col-6">
        <h2>What statement about {meme.name} is true?</h2>
        {awnsers.map((awnser) => <Awnser awnser={awnser} key={awnser}/>)}
      </div>
    </div>
  );
}
function Continue(){
  return(<div/>);
}

function Footer() {
  return(
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          You mum a gay, donald pls <a href="www.pornhub.com">gooby</a> iz a zuc
        </p>
      </div>
    </div>
  );
}

function MemeQuiz({turnData}) {
    return (
      <div className="container-fluid">
      {console.log(turnData)}
        <Hero />
        <Turn {...turnData}/>
        <Continue />
        <Footer />
      </div>
    )
}

export default MemeQuiz;
