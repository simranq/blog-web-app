import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div className="flex items-center justify-center max-w-sm rounded-lg overflow-hidden shadow-lg bg-pastel-blue">
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    );
}
export default Counter;