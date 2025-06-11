import React, { useEffect, useState } from 'react';

function Effect1(props) {
    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");
    const [ h1Name, setH1Name ] =useState("");
    const [ h1Age, setH1Age ] =useState("");
    const handelNameOnChange = (e) => {
        setName(e.target.value)
    }
    const handelAgeOnChange = (e) => {
        setAge(e.target.value)
    }
    const handelNameOkOnClick = (e) => {
        setH1Name(name)
        // console.log("handname:", name)
        console.log("handh1Name:", h1Name)
    }
    const handelAgeOkOnClick = (e) => {
        setH1Age(age)
        // console.log("handh1Age:", h1Age)
    }
    console.log("h1:", h1Name);
    useEffect(() => {
        console.log("useEffect1Name:", h1Name);
        // console.log("useEffecth1Age", h1Age);
    }, [h1Name, h1Age]);
    return (
        <div>
            <h1>{h1Name}</h1>
            <h1>{h1Age}</h1>
            <input type="text" value={name} onChange={handelNameOnChange}/>
            <button onClick={handelNameOkOnClick}>이름 확인</button>
            <input type="text" value={age} onChange={handelAgeOnChange}/>
            <button onClick={handelAgeOkOnClick}>나이 확인</button>
        </div>
    );
}

export default Effect1;