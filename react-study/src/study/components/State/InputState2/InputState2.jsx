import { useState } from "react";

function InputState2() {
    const [ inputValue, setInputValue] = useState({
        t1: "",
        t2: "",
        t3: "",
    });

    const fx1 = () => {};
    const fx2 = fx1;

    const handleOnChange = (e) => {
        // console.log(e);
        const name = e.target.name;
        const value = e.target.value;
        console.log(`name: ${name}, value: ${value}`)
        const newInputValue = {
            ...inputValue,
            [name]: value,
        }

        setInputValue(newInputValue);

        const addr = "address";
        const address = "부산 동래구";
        const obj = {
            name: "김재원",
            age: 31,
            [addr]: address,
            // address: "부산 동래구",
            // ["address"]: "부산 동래구",
            // "address": "부산 동래구",
        }
        const obj2 = {
            ...obj,
        }
    }

    return <div>
        <input type="text" name="t1" value={inputValue.t1} onChange={handleOnChange}/>
        <input type="text" name="t2" value={inputValue.t2} onChange={handleOnChange}/>
        <input type="text" name="t3" value={inputValue.t3} onChange={handleOnChange}/>

        <input type="text" value={inputValue.t1} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t2} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t3} onChange={(e) => {console.log(e)}}/>
    </div>
}

export default InputState2;