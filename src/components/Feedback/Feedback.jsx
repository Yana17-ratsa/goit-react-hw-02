const Feedback = ({
  goods,
  neutrals,
  bads,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul>
      <li>Good: {goods}</li>
      <li>Neutral: {neutrals}</li>
      <li>Bad: {bads}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive:{positiveFeedback(goods, totalFeedback)}</li>
    </ul>
  );
};
export default Feedback;
