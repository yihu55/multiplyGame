import { useState, useEffect } from 'react';
import { Multiply } from './components/Multiply';
import Timer from './components/Timer';

const App = () => {
  //   const [clicks, setClicks] = useState({
  //     left: 0,
  //     right: 0,
  //   });

  // const handleLeftClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     left: clicks.left + 1,
  //   };
  //   setClicks(newClicks);
  // };

  //object spread ...clicks
  // const handleRightClick = () => {
  //   const newClicks = {
  //     ...clicks,
  //     right: clicks.right + 1,
  //   };
  //   setClicks(newClicks);
  // };
  // const handleLeftClick = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     right: clicks.right,
  //   };
  //   setClicks(newClicks);
  // };

  // const handleRightClick = () => {
  //   const newClicks = {
  //     left: clicks.left,
  //     right: clicks.right + 1,
  //   };
  //   setClicks(newClicks);
  // };

  //   return (
  //     <div>
  //       {clicks.left}
  //       <button onClick={handleLeftClick}>left</button>
  //       <button onClick={handleRightClick}>right</button>
  //       {clicks.right}
  //     </div>
  //   );
  // };
  // const History = (props) => {
  //   if (props.allClicks.length === 0) {
  //     return <div>the app is used by pressing the buttons</div>;
  //   }
  //   return <div>button press history: {props.allClicks.join(' ')}</div>;
  // };

  // const App = () => {
  //   const [left, setLeft] = useState(0);
  //   const [right, setRight] = useState(0);
  //   const [allClicks, setAll] = useState([]);

  //   const handleLeftClick = () => {
  //     setAll(allClicks.concat('L'));
  //     setLeft(left + 1);
  //   };

  //   const handleRightClick = () => {
  //     setAll(allClicks.concat('R'));
  //     setRight(right + 1);
  //   };

  return (
    <div>
      {/* {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks} /> */}
      <Timer />
      <Multiply />
    </div>
  );
};

export default App;
