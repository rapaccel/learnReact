import { useState,useRef } from "react";
export default function Player() {
const playernamee=useRef();
const [playerName,setPlayerName]=useState(null);


function handleClick() {
  setPlayerName(playernamee.current.value)
  playernamee.current.value="";
}
  return (
    <section id="player">
      <h2>Welcome, {playerName ?? "Anonym"}</h2>
      <p>
        <input type="text" ref={playernamee}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
