const Feedback = (goods, neutrals, bads) => {
    return (
        <ul>
            <li>Good: {goods}</li>
            <li>Neutral: {neutrals}</li>
            <li>Bad: {bads}</li>        
        </ul>
    )
}
export default Feedback;