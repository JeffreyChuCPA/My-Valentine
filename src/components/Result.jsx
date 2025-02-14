import React from 'react'
import armin from '../assets/armin.jpg'
import kissing from '../assets/kissing.gif'
import cat from '../assets/cat.gif'
import crying from '../assets/crying.gif'
import spongebob from '../assets/spongebob.gif'
import toji from '../assets/toji.jpg'

const Result = ( { answer, setAnswer } ) => {
  
  const yesImgArray = [armin, kissing, cat]
  const noImgArray = [crying, spongebob, toji]

  const randomPic = ( answer ) => {
    const randomNumber = Math.floor(Math.random() * 3);

    if (answer === "yes") {
      return yesImgArray[randomNumber]
    }

    if (answer === 'no') {
      return noImgArray[randomNumber]
    }
  }

  console.log('answer', answer);
  

  return (
    <>
      {answer === "yes" && (
        <>
          <img src={randomPic(answer)} />
          <div>Yippee!</div>
          <div>{`Love you ❤️`}</div>
        </>
      )}
      {answer === "no" && (
        <>
          <img src={randomPic(answer)} />
          <div>AHHHHHHHHHHHHHHH 😭</div>
          <div>{`Still Love you ❤️`}</div>
        </>
      )}
      <button
        className="border py-1 px-3 bg-fuchsia-500 mt-3 rounded-md"
        onClick={() => setAnswer("")}>
        Retry
      </button>
    </>
  );
}

export default Result