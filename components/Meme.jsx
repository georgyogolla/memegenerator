import React from "react";
import memesData from "../memesData";

export default function Meme() {

  // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/1bij.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemImg() {
    //Accessing the memes array from the memesData object
    const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    // console.log(randomIndex);
    const url = memesArray[randomIndex].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))

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
