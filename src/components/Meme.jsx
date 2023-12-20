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
            <div>
                <input className="top--text" placeholder="Shut up" type="text"></input>
            </div>
            <div>
                <input className="bottom--text" placeholder="and take my money" type="text"></input>
            </div>
            <button className="meme--button" onClick={getNewImage}>Get a new meme image  🖼</button>
          </div>
          <img className="meme--img" src={meme.randomImg}></img>
        </div>
    );
};

export default Meme;