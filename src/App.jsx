import { useState } from 'react'
import './App.css'
import chikawa from "./assets/chikawa.gif"
import fingers from "./assets/fingers.png"
import kirby from "./assets/kirby.gif"
import anya from "./assets/anya-forger-pointing.png"
import Result from './components/Result';

function App() {
  const [answer, setAnswer] = useState("")
  console.log(answer);
  
  // <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>

  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto h-screen relative">
        {answer === "" ? (
          <>
            <div className="font-semibold text-3xl text-center relative">
              Will you be my Valentine?
            <img
              src={fingers}
              className="absolute bottom-[14vh] left-[10vw] size-28 rotate-animation"
            />
            <img
              src={kirby}
              className="absolute bottom-[6vh] right-[10vw] size-28"
            />
            </div>
            <img src={chikawa} />
            <div className="flex gap-5 mt-5 relative">
              <button
                className="border py-1 px-3 bg-green-600 w-16 rounded-md"
                onClick={() => setAnswer("yes")}>
                Yes
              </button>
              <button
                className="border py-1 px-3 bg-red-600 w-16 rounded-md"
                onClick={() => setAnswer("no")}>
                No
              </button>
              <img
                src={anya}
                className="absolute top-[2vh] right-[25vw] size-36 -rotate-12 -z-10"
              />
            </div>
          </>
        ) : (
          <Result answer={answer} setAnswer={setAnswer} />
        )}
      </div>
    </>
  );
}

export default App











