import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
    const onPwdHandler = (e) => {
        setPw(e.currentTarget.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let user = {
            email: email,
            pw: pw,
        };
        axios.post("/login", user).then((res) => {
            console.log("로그인 포스트 요청");
        });
    };

    return (
        <LoginModalBlack>
            <LoginModalMain>
                <button
                    onClick={() => {
                        axios.get("/aa").then((res) => {
                            console.log("sdf");
                        });
                    }}
                >
                    asdf
                </button>
                <p>{props.name}</p>
                <button
                    type="button"
                    className="btn-close btn-close-white float-end"
                    aria-label="Close"
                    onClick={() => {
                        props.setModal(false);
                    }}
                />
                <h1 className="text-center">로그인</h1>

                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3">
                        <InputStyle
                            type="email"
                            placeholder="이메일"
                            onChange={onEmailHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <InputStyle
                            type="password"
                            placeholder="비밀번호"
                            onChange={onPwdHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <input type="checkbox" name="xxx" value="yyy" />
                        <span> 로그인 상태 유지</span>
                    </Form.Group>
                    {/* <Link to="/daily">
                    </Link> */}
                    <LoginBtn
                        type="submit"
                        // onClick={() => {
                        //     props.setModal(false);
                        // }}
                    >
                        로그인
                    </LoginBtn>
                </Form>
                <Link to="/signup">
                    <SignupBtn
                        type="button"
                        onClick={() => {
                            props.setModal(false);
                        }}
                    >
                        회원가입
                    </SignupBtn>
                </Link>
            </LoginModalMain>
        </LoginModalBlack>
    );
}
const LoginModalBlack = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.3);
`;
const LoginModalMain = styled.div`
    width: 70vw;
    max-width: 500px;
    height: 580px;
    padding: 50px;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 10vh;
    background-color: #2c3333;
    color: #faeee7;
    h1 {
        font-family: "cafe-font-bold";
        font-size: 40px;
        margin: 40px;
    }
`;
const InputStyle = styled(Form.Control)`
    width: 100%;
    height: 50px;
    border-radius: 7px;
    border: none;
`;
const LoginBtn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 7px;
    border: none;
    background-color: #325288;
    color: white;
    margin-top: 20px;
`;
const SignupBtn = styled(LoginBtn)`
    background-color: #8ac1a7;
`;
