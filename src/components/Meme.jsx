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

    function handleChange(event) {
        const {name,value} = event.target

        // Instead of returning , open the body of function, a different
        // way of modifying meme state
        setMeme(prevMeme => (
            {                
                ...prevMeme,
                [name]: value                
            }
        ))
    }


    return (
        <div className="meme--container">
          <div className="meme--form">
            <input 
                className="form--input" 
                placeholder="Top Text" 
                type="text" 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
            <input 
                className="form--input" 
                placeholder="Bottom text" 
                type="text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
            <button 
                className="meme--button" 
                onClick={getNewImage}
                >
                Get a new meme image  🖼
            </button>
          </div>
          <div className="meme">
            <img className="meme--img" src={meme.randomImg}></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
        </div>
    );
};

export default Meme;