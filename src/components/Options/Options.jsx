// import { useState } from "react";

const Options = () => {


return (
    <ul>
        <li>
            <button onClick={updateGoods}>Good</button>
        </li>
        <li>
            <button onClick={updateNeutrals}>Neutral</button>
        </li>
        <li>
            <button onClick={updateBads}>Bad</button>
        </li>
    </ul>
)
}

export default Options;