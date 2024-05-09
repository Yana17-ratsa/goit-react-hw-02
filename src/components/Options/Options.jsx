// import { useState } from "react";

// import Feedback from "../Feedback/Feedback";

const Options = (updateFeedback, totalFeedback, setFeedbacks) => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={updateFeedback}>Good</button>
        </li>
        <li>
          <button onClick={updateFeedback}>Neutral</button>
        </li>
        <li>
          <button onClick={updateFeedback}>Bad</button>
        </li>
      </ul>
      {totalFeedback !== 0 && (
        <button onClick={() => setFeedbacks(0)}>Reset</button>
      )}
    </div>
  );
};

export default Options;
