import React from "react";
import styled from "styled-components";

function Signup() {
    return (
        <ImsiDiv>
            <h1>회원가입</h1>
        </ImsiDiv>
    );
}

const ImsiDiv = styled.div`
    width: 100%;
    padding-top: 65px;
    h1 {
        text-align: center;
        margin: 30px;
        font-size: 50px;
        font-family: "cafe-font-bold";
        letter-spacing: 3px;
    }
`;

export default Signup;
