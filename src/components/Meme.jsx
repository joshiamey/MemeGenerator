import React, { useState } from "react";
import memesData from "../memesData";


const Meme = () => {
    const [memeImg,setMemeImg] = useState("");

    function getNewImage() {
        const memes = memesData.data.memes;
        const randomMemeIndex = Math.floor(Math.random() * memes.length);
        setMemeImg(prevMemeImg => {
            console.log('Previous url = ',prevMemeImg, ' setting to new url= ',memes[randomMemeIndex].url);
            return memes[randomMemeIndex].url;
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
          <img className="meme--img" src={memeImg}></img>
        </div>
    );
};

export default Meme;