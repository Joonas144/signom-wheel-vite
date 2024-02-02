
import './App.scss';
import WebFontLoader from 'webfontloader'
import { Wheel } from 'react-custom-roulette';
import React, { Component, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { greetings } from './services/greetingService.ts';
const fonts = {
  google: {
    families: ['Signika:400,700']
  }
}
WebFontLoader.load(fonts);
export default function App() {
  const [show, setShow] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [winnerNumber, setWinner] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFinished = () => {
    setGreeting(greetings.getItems()[winnerNumber]);
    setMustSpin(false);
    handleShow();
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * greetings.getItems().length);
      setWinner(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Päivän tervehdykset:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{greeting}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <header className="container-fluid">
        <span className="header__title">
          <span>Signom</span>
          <span>Internal</span>
          <span>Lull <small>It kinda means meeting right?</small></span>
          <span>Lyric</span>
          <span>Yelper <small>Grasping at straws here</small></span>
        </span>
        
      </header>



      <div className="background">
        <img src='img/5th-element/twoday-5th-element-polygon-blue.png' className="background__block background__block--1"></img>
          <img src='img/5th-element/twoday-5th-element-square-green.png'className="background__block background__block--2"></img>
          <img src='img/5th-element/twoday-5th-element-pill-red.png' className="background__block background__block--3"></img>
          <img src='img/5th-element/twoday-5th-element-triangle-yellow.png' className="background__block background__block--4"></img>
          <img src='img/5th-element/twoday-5th-element-circle-light-orange.png' className="background__block background__block--5"></img>
          <img src='img/5th-element/twoday-5th-element-circle-green.png' className="background__block background__block--6"></img>
          <img src='img/5th-element/twoday-5th-element-square-blue.png' className="background__block background__block--7"></img>
      </div>
      
      <main className="container wheel-container">
        <Wheel
          prizeNumber={winnerNumber}
          mustStartSpinning={mustSpin}
          data={greetings.getGreetings()}
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
          onStopSpinning={() => onFinished()}
          fontFamily='Franklin Gothic'
          disableInitialAnimation={true}
          outerBorderWidth={2}
          innerBorderWidth={2}
          innerRadius={20}
          radiusLineWidth={2}
          outerBorderColor='transparent'
          innerBorderColor='#171717'
          radiusLineColor='#171717'
          spinDuration={0.6}
        />
        <Button variant="primary" onClick={handleSpinClick}>
            Spinnaa
          </Button>
      </main>
    </div>
  );
}
