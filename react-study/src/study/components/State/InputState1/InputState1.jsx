import { useState } from "react";

function InputState1() {
    const [ inputValue, setInputValue ] = useState("");
    const [ h1Text, setH1Text ] = useState("");
    const [ inputValue1, setInputValue1 ] = useState("");
    const [ h1Text1, setH1Text1 ] = useState("");
    console.log("렌더링")

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        // console.log(e.target.value);
    }
    const handleOnChange1 = (e) => {
        setInputValue1(e.target.value)
        // console.log(e.target.value);
    }
    const handleOnClick = () => {
        setH1Text(inputValue)
        setH1Text1(inputValue1)
        setInputValue("");
        setInputValue1("");
    }
   
    
    return<div>
        <h1>{h1Text}</h1>
        <h1>{h1Text1}</h1>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <input type="text" value={inputValue1} onChange={handleOnChange1} />
        <button onClick={handleOnClick}>확인</button>
    </div>
}

export default InputState1;