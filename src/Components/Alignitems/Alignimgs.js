// import React from 'react'
import './alignimg.css'
import React, { useState } from "react";
import "./alignimg.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./tractor.png";
import Navbar from '../Description/Navbar'

function Alignimgs() {
  const [text, setText] = useState("Arrange the tractor pieces!!");
      
    const set = () => {
        setText("Congratulations!!")}
      
    return (
        <>
        <Navbar/>
            <h2 className="tag">{text}</h2>
            <JigsawPuzzle
                imageSrc={img}
                rows={3}
                columns={3}
                onSolved={set}
                className="jigsaw-puzzle"/>
        </>
    );
}

export default Alignimgs


  
