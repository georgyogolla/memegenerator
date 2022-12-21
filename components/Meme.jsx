import React from "react";
import memesData from "../memesData";

export default function Meme() {
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */
  const [memeImage, setMemeImage] = React.useState("");


  function getMemImg() {
    //Accessing the memes array from the memesData object
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--inputs" />
        <input type="text" placeholder="Bottom text" className="form--inputs" />
        <button onClick={getMemImg} className="form--button">
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} alt="" />
    </main>
  );
}
