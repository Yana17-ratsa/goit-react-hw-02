const Feedback = (goods, neutrals, bads, totalFeedback) => {

    return (
        <ul>
            <li>Good: {goods}</li>
            <li>Neutral: {neutrals}</li>
            <li>Bad: {bads}</li>
            <li>Total: {totalFeedback}</li>  
            <li>Positive: {() => {Math.round((goods / totalFeedback) * 100)}}
 </li>      
        </ul>
    )
}
export default Feedback;