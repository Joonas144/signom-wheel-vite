
import { Wheel } from 'react-custom-roulette';
import { Button } from 'react-bootstrap';
import { WheelItems } from '../models/wheel';
import { useState, FC } from 'react';
import WheelItemService from '../services/wheelItemService';


type PageProps = {
    items: WheelItems
}

const WheelComponent: FC<PageProps> = ({ items }) => {
    const [show, setShow] = useState(false);
    const [mustSpin, setMustSpin] = useState(false);
    const [greeting, setGreeting] = useState("");
    const [winnerNumber, setWinner] = useState(0);
    //const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const onFinished = () => {
      setGreeting(WheelItemService.getLabels(items)[winnerNumber]);
      console.log(greeting);
      console.log(show);
      setMustSpin(false);
      handleShow();
    };
  
    const handleSpinClick = () => {
      if (!mustSpin) {
        const newPrizeNumber = Math.floor(Math.random() * WheelItemService.getLabels(items).length);
        setWinner(newPrizeNumber);
        setMustSpin(true);
      }
    }

    return(
        <>
<div className="container wheel-container">
<Wheel
  prizeNumber={winnerNumber}
  mustStartSpinning={mustSpin}
  data={WheelItemService.generateWheelItems(items)}
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
  </div>
  </>
    )
}

export default WheelComponent;