import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import NotFound from '../NotFound/NotFound';

function UnAuthRouter() {
    return (
        <>
            <Routes>
                <Route path='/signin' element={<Signin />} /> 
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default UnAuthRouter;