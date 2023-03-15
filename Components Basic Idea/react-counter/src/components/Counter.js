import { useState } from 'react';

export const Counter = (props) => {
    const [count, setCount] = useState(props.start || 0);
    const [direction, setDirection] = useState('');

    let color = 'white';

    if (count === 0) {
        color = 'white';
    } else if (count > 0) {
        color = 'red';
    } else if (count < 0) {
        color = 'blue';
    }

    function decreaseHandler() {
        setCount(oldValue => oldValue - 1);
        setDirection('Decreased');
    }

    function clearHandler() {
        setCount(0);
    }

    function increaseHandler() {
        setCount(oldValue => oldValue + 1);
        setDirection('Increased');
    }

    return (
        <div>
            <h1 style={{ fontSize: 16 + count + 'px' }}>Counter</h1>
            {direction && <p>Direction: {direction}</p>}
            {count !== 0
                ? <p>Number is {count > 0 ? 'positive' : 'negative'}</p>
                : null}
            <h2 style={{ color }}>Count: {count}</h2>

            <button onClick={decreaseHandler}>-</button>
            <button onClick={clearHandler}>clear</button>
            <button onClick={increaseHandler}>+</button>
        </div>
    );
};