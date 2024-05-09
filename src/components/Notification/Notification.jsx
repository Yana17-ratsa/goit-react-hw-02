const Notification = ({ totalFeedback }) => {
  const message = 'No feedback yet';

  if (totalFeedback === 0) {
    return <p>{message}</p>;
  }
};

export default Notification;
