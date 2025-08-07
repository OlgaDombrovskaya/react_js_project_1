import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeСount, setDislikeCount] = useState(0);

  const countLike = () => {
    setLikeCount((prevValue) => {
      return prevValue + 1;
    });
  };
  const countDislike = () => {
    setDislikeCount((prevValue) => {
      return prevValue + 1;
    });
  };

  const ResetResults = () => {
setLikeCount(0); setDislikeCount(0);
  };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button buttonName="Like" onClick={countLike} />
      </div>
      <p className="count">{likeCount}</p>
      <div className="button_control">
        <Button buttonName="Dislike" onClick={countDislike} />
      </div>
      <p className="count">{dislikeСount}</p>
      <div className="button_control">
        <Button buttonName="Reset Results" onClick={ResetResults} />
      </div>
    </div>
  );
}

export default Feedback;
