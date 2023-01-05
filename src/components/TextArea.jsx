import { useState } from "react";
import Header from "./Header";
import "./textArea.css";

const TextArea = () => {
  const [text, setText] = useState("");
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const words = text.split(/\s+/).filter((word) => word !== "").length;
  const timeToRead = ((words / 225) * 60).toFixed();
  const speakingTime = ((words / 180) * 60).toFixed();
  const characters = text
    .trim()
    .split("")
    .filter((char) => char !== " ").length;

  const re = /[.!?]/;
  const noOfSentences = text.split(re).filter((word) => word !== "").length;

  return (
    <>
      <Header />
      <div className="container">
        <div className="leftside">
          <p className="header">
            <span> {words} Word</span>
            <span>{`${
              characters === 1 ? "1 character" : `${characters} characters`
            }`}</span>
          </p>
          <textarea
            className="text-area"
            value={text}
            placeholder="Type or copy and paste your document here ..."
            onChange={textChangeHandler}
          />
        </div>

        <div className="rightside">
          <p>Details </p>

          <ul>
            <li>
              Words <span>{words}</span>{" "}
            </li>
            <li>
              Characters <span>{characters}</span>{" "}
            </li>
            <li>
              Sentences <span>{noOfSentences}</span>{" "}
            </li>
            <li>
              Reading Time{" "}
              <span>
                {timeToRead > 60
                  ? `${Math.floor(timeToRead / 60)}m ${timeToRead % 60}s`
                  : timeToRead + "s"}
              </span>{" "}
            </li>
            <li>
              Speaking Time{" "}
              <span>
                {speakingTime > 60
                  ? `${Math.floor(speakingTime / 60)}m ${speakingTime % 60}s`
                  : speakingTime + "s"}
              </span>{" "}
            </li>
          </ul>
          <button onClick={(e) => setText("")}>clear</button>
        </div>
      </div>
    </>
  );
};

export default TextArea;
