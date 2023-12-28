import React, { useEffect, useState } from "react";

const MEMES_API_URI = "https://api.imgflip.com/get_memes";

const Meme = () => {
    const [meme,setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImg: "http://i.imgflip.com/1bij.jpg"});

    const [allMemes, setAllMemes] = React.useState([]);
    
    // Async function that fetches memes from the web
    async function fetchMemes() {
        const res = await fetch(MEMES_API_URI);
        const data = await res.json();
        setAllMemes(data.data.memes);
    }
    // Using effect to fetch the memes data from external URL and populate allmemes array
    // as we want to run it once , use empty dependency list
    useEffect(() => {
        fetchMemes();
    },[])
    

    function getNewImage() {
        const randomMemeIndex = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => {
            console.log('Previous url = ',prevMeme.randomImg, ' setting to new url= ',allMemes[randomMemeIndex].url);
            return {
                ...prevMeme,
                randomImg : allMemes[randomMemeIndex].url
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