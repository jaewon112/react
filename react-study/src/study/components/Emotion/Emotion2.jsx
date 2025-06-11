/**
 * Emotion(Css in Js 라이브러리)
 * 1. 라이브러리 npm install @emotion/react
 * 2. jsx 태그의 css 속성 활성화 -> 주석으로 @jsxImportSource @react/emotion
 * 3. css객체 import -> css``문자열로 css 작성
 * 4. 확장프로그램 vscode-styled-components 설치
 */
/** @jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

    
function Emotion2(props) {
    return (
        <div>
            <div css={s.box1}></div>
            <div css={s.box2("gray")}></div>
        </div>
    );
}

export default Emotion2;