import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function PlanModal(props) {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [Alert1, setAlert1] = useState(false);
    const [Alert2, setAlert2] = useState(false);

    const Subject = (event) => {
        setSubject(event.target.value);
    };
    const Content = (event) => {
        setContent(event.target.value);
    };

    return (
        <AddPlanModalBlack>
            <AddPlanModalMain>
                <h1>일정 추가</h1>
                <Box width="100%" height="350px">
                    <InputDiv>
                        <label>분류</label>
                        <InputPlan height="40px" onChange={Subject} />
                    </InputDiv>
                    {Alert1 === true ? (
                        <Box height="20px">
                            <AlertText>분류를 입력하십시오</AlertText>
                        </Box>
                    ) : null}

                    <InputDiv>
                        <label>내용</label>
                        <InputPlan height="100px" onChange={Content} />
                    </InputDiv>
                    {Alert2 === true ? (
                        <Box height="20px">
                            <AlertText>내용을 입력하십시오</AlertText>
                        </Box>
                    ) : null}
                </Box>
                <PlanBtn
                    onClick={() => {
                        if (subject === "") {
                            return setAlert1(true);
                        } else if (content === "") {
                            return setAlert2(true);
                        }

                        let newPlan = [...props.plan];
                        newPlan.unshift({
                            a: subject,
                            b: content,
                        });
                        props.setPlan(newPlan);
                        props.setPlanModal(false);
                    }}
                >
                    저장
                </PlanBtn>
                <PlanBtn
                    color="#8ac1a7"
                    onClick={() => {
                        props.setPlanModal(false);
                    }}
                >
                    닫기
                </PlanBtn>
            </AddPlanModalMain>
        </AddPlanModalBlack>
    );
}

const AlertText = styled.p`
    font-size: 5px;
    color: rgb(219, 82, 82);
    text-align: left;
    margin-left: 80px;
    margin-top: 5px;
    letter-spacing: 3px;
`;

const Box = styled.div`
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
`;
const InputDiv = styled.div`
    width: 100%;
    display: flex;
    label {
        margin: 20px;
        margin-bottom: 0;
    }
`;
const InputPlan = styled.textarea`
    margin: 10px;
    margin-bottom: 0;
    width: 70%;
    height: ${(props) => props.height || "auto"};
    resize: none;
`;

const AddPlanModalBlack = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.3);
`;

const AddPlanModalMain = styled.div`
    width: 70vw;
    max-width: 500px;
    height: 580px;
    padding: 10px;
    padding-top: 50px;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 10vh;
    background-color: #2c3333;
    color: #faeee7;
    text-align: center;
    h1 {
        margin-bottom: 40px;
    }
`;
const PlanBtn = styled.button`
    width: 40%;
    height: 50px;
    margin: 10px;
    border-radius: 7px;
    border: none;
    background-color: ${(props) => props.color || "#325288"};
    color: #faeee7;
`;
