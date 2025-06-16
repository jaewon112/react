/** @jsxImportSource @emotion/react */
import * as s from './styles';
import React from 'react';

function Mypage(props) {
    return (
        <header>
              <h1><Link to={"/"}>사이트 로고</Link></h1>
              {
                isLogin ? 
                <ul>
                    <li><Link to={"/auth/mypage"}><LuUser /></Link></li>
                    <li><Link to={"/auth/logout"}><LuLogOut /></Link></li>
                </ul>
                :
                <ul>
                    <li><Link to={"/users/signin"}><LuUser /></Link></li>
                    <li><Link to={"/users/signup"}><LuUserPlus /></Link></li>
                </ul>
              }
            </header>
    );
}

export default Mypage;