import React from "react";

const Meme = () => {
    return (
        <div className="meme--container">
          <form className="top--form">
            <input className="top--text" placeholder="Top Text" type="text"></input>
            <input className="bottom--text" placeholder="Bottom Text" type="text"></input>
            <button className="meme--button">Get a new meme image  🖼</button>
          </form>
        </div>
    );
};

export default Meme;