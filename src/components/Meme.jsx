import React, { useState } from "react";
import memesData from "../memesData";


const Meme = () => {
    const [meme,setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImg: "http://i.imgflip.com/1bij.jpg"});

    const [allMemeImgs, setAllMemeImgs] = React.useState(memesData);

    function getNewImage() {
        const memes = allMemeImgs.data.memes;
        const randomMemeIndex = Math.floor(Math.random() * memes.length);
        setMeme(prevMeme => {
            console.log('Previous url = ',prevMeme.randomImg, ' setting to new url= ',memes[randomMemeIndex].url);
            return {
                ...prevMeme,
                randomImg : memes[randomMemeIndex].url
            }
        })
    }


    return (
        <div className="meme--container">
          <div className="meme--form">
                <input className="form--input" placeholder="Top Text" type="text"></input>
                <input className="form--input" placeholder="Bottom text" type="text"></input>
            <button className="meme--button" onClick={getNewImage}>Get a new meme image  🖼</button>
          </div>
          <div className="meme">
            <img className="meme--img" src={meme.randomImg}></img>
            <h2 className="meme--text top">One does not simply</h2>
            <h2 className="meme--text bottom">Walk into Mordor</h2>
          </div>
        </div>
    );
};

export default Meme;