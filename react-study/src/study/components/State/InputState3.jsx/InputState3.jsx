import { useState } from "react"

function InputState3() {

    const studentInputValueEmpty = {
        name: "",
        age: "",
        address: "",
    }
    
    const [ studentInputValue, setStudentInputValue ] = useState(studentInputValueEmpty);

    const handleOnChange = (e) => {
        const { name,value } = e.target;
        setStudentInputValue(prev => ({...prev, [name]: value}));
        // setStudentInputValue(prev => {
        //     return {
        //         ...prev, 
        //         [name]: value
                // setStudentInputValue(studentInputValue => ({...studentInputValue, [name]: value})); 위 코드와 같은 의미
            // }});
    }

    return <div>
        <h1>{studentInputValue.name}</h1>
        <h1>{studentInputValue.age}</h1>
        <h1>{studentInputValue.address}</h1>
        <input type="text" name="name" value= {studentInputValue.name} onChange={handleOnChange}/>
        <input type="text" name="age" value= {studentInputValue.age} onChange={handleOnChange}/>
        <input type="text" name="address" value= {studentInputValue.address} onChange={handleOnChange}/>
    </div>
}

export default InputState3