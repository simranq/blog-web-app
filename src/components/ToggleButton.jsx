import { useState } from "react"

function ToggleButton() {
    const [isOn, setIsOn] = useState("");
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <div className={`w-50 h-30  ${isOn ? "bg-green-500" : "bg-red-500"}`}>
                <p>The button is: {isOn ? "ON" : "OFF"}</p>                
                <button onClick={handleToggle}>Toggle</button>
            </div>
        </div>
    );
}
export default ToggleButton;