import React, { useEffect, useState } from 'react';
import IndexLayout from './components/IndexLayout/IndexLayout';
import IndexMain from './components/IndexMain/IndexMain';

function Index(props) {
    const [ isLoad, setLoad ] = useState(false)
    const [ todoList, setTodoList] = useState([]);
    const [ filter, setFilter ] = useState("incomplete");
    const [ searchText, setSearchText ] = useState("");

    useEffect(() => {
        let localStorageTodoList = localStorage.getItem("todoList");
        if (!localStorageTodoList) {
            localStorage.setItem("todoList", JSON.stringify([]));
            localStorageTodoList = [];
            setTodoList(localStorageTodoList);
        } else {
            setTodoList(JSON.parse(localStorageTodoList));
            
        }
        setLoad(true);
    }, []);

    useEffect(() => {
        console.log("todoList:", todoList);
        setSearchText("");
        if (isLoad) {
            let localStorageTodoList = localStorage.getItem("todoList");
            const todoListJosn = JSON.stringify(todoList)
            if (localStorageTodoList !== todoListJosn)
                localStorage.setItem("todoList", todoListJosn)
        }
    }, [isLoad, todoList]);
     // useEffect(() => {}, [])   에서  [] 가 없으면 모든 동작(event)에 반응하고 , [] 에 값을 넣지 않으면 모든 동작에 반응하지않음. 배열같은 의미로 여러개를 넣을 수 있음
    // 위 [todoList] 는 todo리스트의 값 변경 동작만 반응하겠다는 의미 

    const filterTodoList = todoList.filter(todo => {
        if (filter === "all") {
            return true;
        } else if (filter === "complete") {
            return todo.isComplete;
        } else if (filter === "incomplete") {
            return !todo.isComplete;
        }
    }).filter(todo => {
        if (searchText.trim().length === 0) {
            return true;
        } 
        return todo.content.includes(searchText);
    });

    return (
        <IndexLayout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
            <IndexMain todoList={filterTodoList} setTodoList={setTodoList} />
        </IndexLayout>
    );
}

export default Index;


