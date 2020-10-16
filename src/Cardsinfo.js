import React from "react";
function Cardsinfo(props){
  const click = () =>{
    alert('DO YOU WANT TO READ MORE');
  }
 
  return(
      <>
  <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="pic" className="cardimg" />
      <div className="cardinfo">
      <h2 className="cardtitle"> {props.title} </h2>
        <span className="cardcatg"> {props.year} </span>
          <a href={props.link} target="blank">
            <br />
            <button onClick={click}>READ MORE</button>
            </a>     
      </div>
    </div>
  </div>
  </>
  );
  }
  export default Cardsinfo;