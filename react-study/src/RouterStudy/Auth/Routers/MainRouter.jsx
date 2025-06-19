import React, { use, useEffect, useState } from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import UnAuthRouter from './UnAuthRouter';
import AuthRouter from './AuthRouter';
import NotFound from '../NotFound/NotFound';
import RootHeader from '../RootHeader/RootHeader';
import axios from 'axios';
import { useGlobalStateStore, useStore } from '../stores/storeStudy';

/**
 * 전역 상태 관리
 * 1. 클라이언트 전역 상태 (Zustand, recoil - react 19에서 지원하지않음)
 * 2. 서버 전역 상태 (ReactQuery)
 */

function MainRouter(props) {

    const [ isLogin, setLogin ] = useState(false);
    const { value: isRefresh, setValue: setRefresh } = useStore();
    const { name, setName, setName2 } = useGlobalStateStore();
    // const [ refresh, setRefresh ] = useState(true);

    useEffect(() => {
        if (isRefresh) {
            const accessToken = localStorage.getItem("AccessToken");
            if (!!accessToken) {

                axios.get("http://localhost:8080/api/users/login/status", {
                    headers : {
                        Authorization: !accessToken ? null : `Bearer ${accessToken}`
                    }
                })
                .then(response => {
                    if (response.data.login) {
                        setLogin(true);
                    }
                })
            }
            setRefresh(prev => false);
        }    
    }, [isRefresh])

    return (
        <RootLayout>
            <RootHeader isLogin={isLogin} setLogin={setLogin} />
            <Routes>
                <Route path='' element={<Home /> }/>
                <Route path='/auth/*' element={<AuthRouter />} />
                <Route path='/users/*' element={<UnAuthRouter />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </RootLayout>
    );
}

export default MainRouter;