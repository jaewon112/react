/** @jsxImportSource @emotion/react */
import { CiCircleCheck } from 'react-icons/ci';
import * as s from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from 'react-icons/md';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {  useStore } from '../stores/storeStudy';
import { useQueryClient } from '@tanstack/react-query';
/**
 * 유효성 검사(Validation Check)
 */

function useSignInAndUpInput({ id, type, name, placeholder, value, valid }) {
     const STATUS = {
        idle: "idle",
        success: "success",
        error: "error",
    };
    const inputRef = useRef();
    const [ inputValue, setInputValue ] = useState(value);
    const [ status, setStatus ] = useState(STATUS.idle);

    const handleOnChange = e => {
        setInputValue(e.target.value);
    }

    const handleOnBlur = e => {
        if (isEmpty(e.target.value)) {
            setStatus(STATUS.idle);
            return;
        }

        if (valid.enabled) {
            setStatus(valid.regex.test(e.target.value) ? STATUS.success : STATUS.error);
            return;
        }
        setStatus(valid.callback() ? STATUS.success : STATUS.error)
    }

    const isEmpty = str => {
        return !/^.+$/.test(str);
    }
    
    return {
        name,
        value: inputValue,
        status,
        ref: inputRef,  
        element: <SignInAndUpInput 
            key={id}
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={inputValue} 
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            status={status}
            message={valid.message}
            inputRef={inputRef}
        />
    }
}

function SignInAndUpInput ({ type, name, placeholder, value, onChange, onBlur, status, message, inputRef}) {

    const { isShow, element: PasswordInputHiddenButton } = usePasswordInputHiddenButton();

    return (
        <div css={s.inputItem}>
            <div css={s.inputContainer(status)}>
                <input type={type === "password" ? isShow ? "text" : "password" : type} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} ref={inputRef} />
                {
                    type === "password" && PasswordInputHiddenButton
                }
                    {
                        status !== "idle"
                        && (
                            status === "success" 
                            ? <div><MdOutlineCheckCircle /></div>
                            : <div><MdOutlineErrorOutline /></div>
                        )
                    }
            </div>
            <InputValidatedMessage status={status} message={message} />
        </div>
    )
}

function usePasswordInputHiddenButton() {
    const [ isShow, setShow] = useState(false);
    const handleOnClick = () => {
        setShow(prev => !prev);
    }
    return {
        isShow,
        element: <PasswordInputHiddenButton isShow={isShow} onClick={handleOnClick}/>
    }
}

function PasswordInputHiddenButton({isShow, onClick}) {

    return <p onClick={onClick}>{isShow ? <IoEyeOff /> : <IoEye />}</p>
}

function InputValidatedMessage({status, message}) {
    const SUCCESS = "success";
    const ERROR = "error";

    if (status === ERROR) {
        return <div css={s.messageContainer()}>{message}</div>
    }
    
    return <></>
}

function Signin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();    
    const { setValue:setRefresh } = useStore();
    const [ submitDisabled, setSubmitDisabled] = useState(true);

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "사용자이름",
            value: location.state?.username || "",
            valid: {
                enabled: true,
                regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
                message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
            },
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "비밀번호",
            value: location.state?.password || "",
            valid: {
                enabled: true,
                regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,20}$/,
                message: "비밀번호는 8~20자이며, 영문·숫자·특수문자를 모두 포함해야 합니다.",
            },
        },
    ];

    const inputItems = inputs.map(input => useSignInAndUpInput(input));

    useEffect(() => {
        inputItems.forEach(inputItem => {
            inputItem.ref.current.focus();
            inputItem.ref.current.blur();
        })
    }, [])

    useEffect(() => {
        setSubmitDisabled(!!inputItems.find(inputItem => inputItem.status !== "success"))
    },[inputItems])

    
    // useEffect(() => {
    //     setSubmitDisabled(!!Object.values(inputState).map(obj => obj.status)
    //     .find(status => status !== "success"))
    // }, [inputState])

    const handleRegisterOnClick = async () => {
        const url = "http://localhost:8080/api/users/login";

        //컨트롤러 메소드명 Login Dto 명 LoginDto Post요청

        let data = {}; //DTO 랑 같아야함.
        inputItems.forEach(inputItem => {
            data = {
                ...data,
                [inputItem.name]: inputItem.value,
            }
        })

        try {
            const response = await axios.post(url, data);
            const accessToken = response.data?.accessToken;
            if (!!accessToken) {
                localStorage.setItem("AccessToken", accessToken);
                queryClient.invalidateQueries({
                    queryKey: ["principalUserQuery"],
                })
                // setRefresh(prev => true);
                navigate("/");
            }
            alert("로그인 요청 완료");
        } catch (error) {
            const { response, status } = error;
            console.log(response.data);
            alert("로그인 실패");
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h1 css={s.title}>로그인</h1>
                {
                    inputItems.map(inputItem => inputItem.element)
                }
            </div>
            <button css={s.submitButton} disabled={submitDisabled} onClick={handleRegisterOnClick}>로그인하기</button>
        </div>
    );
}

export default Signin;


/**
 * username, password, checkpassword, fullname(한글), email 
 * javascript 정규표현식을 각각 만들어주고 error메세지도 만들어줘
 */