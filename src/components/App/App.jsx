import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

function App() {

  const [feedbacks, setFeedbacks] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
  });

  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedbacks({
      ...feedbacks,
      feedbackType: feedbacks.feedbackType + 1,
    });
  }


  // const updateGoods =() => {
  //   setFeedbacks({
  //     ...feedbacks,
  //     good: feedbacks.good + 1,
  //   });
  // };

  // const updateNeutrals =() => {
  //   setFeedbacks({
  //     ...feedbacks,
  //     neutral: feedbacks.neutral + 1,
  //   });
  // };

  // const updateBads = () => {
  //   setFeedbacks({
  //     ...feedbacks,
  //     bad: feedbacks.bad + 1,
  //   });
  // };

  return (
  <>
    <Description />
    <Options feedbackType={feedbackType}updateFeedback={updateFeedback}
    // updateGoods={updateGoods} 
    // updateNeutrals={updateNeutrals} 
    // updateBads={updateBads}
    />
    <Feedback goods={feedbacks.good} neutrals={feedbacks.neutral} bads={feedbacks.bad}/>
  </>
)
}

export default App;
