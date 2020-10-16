/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import Cardsinfo from './Cardsinfo';
import "./index.css";
function App()
{
  return(
  <>
  <h1 className="heading">TOP 6 INDIAN NOVELS</h1>
  <Cardsinfo  imgsrc="https://gladreaders.com/wp-content/uploads/elementor/thumbs/Train-to-Pakistan-ny91jcmnm1rmxd510p3heyu3oldl9s2bkmax1y5xeq.jpg"
  year="Originally published : 1956"
  title="TRAIN TO PAKISTAN"
  link="https://en.wikipedia.org/wiki/Train_to_Pakistan"
  />
  <Cardsinfo imgsrc="https://images-na.ssl-images-amazon.com/images/I/41nOjpcK4PL._SX322_BO1,204,203,200_.jpg"
   year="Originally published: 23 December 1815"
  title="EMMA"
  link="https://en.wikipedia.org/wiki/Emma_(novel)" />
  <Cardsinfo imgsrc="https://images-na.ssl-images-amazon.com/images/I/51N3QQjT9EL._SX304_BO1,204,203,200_.jpg"
   year="Originally published:	December 1847"
  title="WUTHERING HEIGHTS"
  link="https://en.wikipedia.org/wiki/Wuthering_Heights" />
  <Cardsinfo imgsrc="https://upload.wikimedia.org/wikipedia/en/1/1e/Thegodofsmallthings.jpg"
  year="Originally published : 1997"
  title="THE GOD OF SMALL THINGS"
  link="https://en.wikipedia.org/wiki/The_God_of_Small_Things" />
  <Cardsinfo imgsrc="https://gladreaders.com/wp-content/uploads/elementor/thumbs/A-Hundred-Little-Flames-ny91ip4ov6vgv435twxt6mrktylexch15dzs214rqa.jpg"
  year="Originally published : November 2017"
  title="THE HUNDRED LITTLE FLAMES"
  link="https://en.wikipedia.org/wiki/Preeti_Shenoy" />
  <Cardsinfo imgsrc="https://gladreaders.com/wp-content/uploads/elementor/thumbs/Wings-of-Fire-ny91jdkhsvsx8z3nv7i3zglk9z8yhh61wqyej84j8i.jpg" 
  year="Originally published : 1999"
  title="WINGS OF FIRE"
  link="https://en.wikipedia.org/wiki/Wings_of_Fire" />
</>
);}
export default App;