import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Month() {
    return (
        <ImsiDiv>
            <h1>월 플래너</h1>
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

export default Month;