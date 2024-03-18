import "./Count.module.css";
import React, {useState} from 'react';

function Count(){
    let [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function reset(){
        setCount(count = 0);
    }

    return(
        <section>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </section>
    )
}

export default Count