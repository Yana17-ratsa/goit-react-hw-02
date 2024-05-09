import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {
  //? useState
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem('feedbacks');

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  //? useEffect
  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, bad: 0, neutral: 0 });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          goods={feedbacks.good}
          neutrals={feedbacks.neutral}
          bads={feedbacks.bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification totalFeedback={totalFeedback} />
      )}
    </>
  );
}

export default App;
