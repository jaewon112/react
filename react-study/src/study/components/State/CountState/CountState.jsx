import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
    // const countState = useState(0);
    // const count = countState[0];
    // const setcount = countState[1];
    const [ count, setCount ] = useState(0);
    // let count = 0;
    console.log("렌더링")

    const handleOnClick = (e) => {
        console.log(e);
        console.log(e.target.value);
        const num = parseInt(e.target.value);
        console.log(typeof(num));
        // countState[0] += num;
        // countState 는 set 메서드 호출
        setCount(count + num) 
    }

    return <div>
      <CountHeader count = {count} /> 
      <CountButton text={"+1"} value={1} onClick={handleOnClick}/>
      <CountButton text={"-1"} value={-1} onClick={handleOnClick}/>
      {/* <button onClick={handleOnClick} value={"plus"}>+1</button>
      <button onClick={handleOnClick} value={"minus"}>+1</button> */}
    </div>
}
export default CountState;