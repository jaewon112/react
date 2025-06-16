import React, { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function Router3(props) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("경로 이동!");
        console.log(location.pathname); //현재 경로
        if (location.pathname === "location/2") {
            navigate("location/3", {
                state: {
                    name: "김재원",
                    age: 31,
                }
            });
        }

    }, [location.pathname]);

    useEffect(() => {
        console.log("쿼리(서치)파람 변경");
        console.log(location.search);
        console.log(decodeURI(location.search)); //location.search 는 사람이 읽을 수 있도록 디코딩하는 JavaScript 표현
    }, [location.search]);

    useEffect(() => {
        console.log(location.state);
    }, [location.state]);

    const handleBackOnClick = () => {
        navigate(-1);
    }

    return (
        <div>
            <Link to={"/location/1"}>location1</Link>
            <Link to={"/location/1"}>location1</Link>
            <Link to={"/location/3"}>location3-1</Link>
            <Link to={"/location/3?name=김재1"}>location3-2</Link>
            <Link to={"/location/3?name=김재2"}>location3-3</Link>
            <button onClick={handleBackOnClick}>뒤로가기</button>
            <Routes>
                <Route path='/location1' element={<h1>Location1</h1>}/>
                <Route path='/location2' element={<h1>Location2</h1>}/>
                <Route path='/location3' element={<h1>Location3</h1>}/>
            </Routes>
        </div>
    );
}

export default Router3;