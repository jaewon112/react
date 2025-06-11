import React, { useEffect, useRef } from 'react';
// import fx1, {fx2, fx3} from '../ImportStudy/functions';
import * as f from '../ImportStudy/functions';
import { useState } from 'react';


function DomRef(props) {
    // const [ name, setName ] = useState();
    const inputRef = useRef();
    console.log(12)
    // 마운트, 언마운트 관리
    useEffect(() => {
        console.log("마운트(장착)");
        console.log(inputRef.current.value);
        return () => {
            console.log("언마운트(해체)")
        }
    })

    console.log("렌더링3");

    return (
        <div>
            <input type="text" ref={inputRef} value={"abc"} />
        </div>
    );
}

export default DomRef;