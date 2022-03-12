import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
export default function Btmbar(props) {
    return (
        <BottomBar>
            <Home>
                <Link to={"/"}>
                    <Button>
                        <AiOutlineHome />
                    </Button>
                </Link>
            </Home>
            <DailyBar>
                <Link to="/daily">
                    <Button>Daily</Button>
                </Link>
            </DailyBar>

            <WeeklyBar>
                <Link to="/weekly">
                    <Button>Weekly</Button>
                </Link>
            </WeeklyBar>

            <MonthlyBar>
                <Link to="/monthly">
                    <Button>Monthly</Button>
                </Link>
            </MonthlyBar>
        </BottomBar>
    );
}

const BottomBar = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    background-color: rgb(80, 80, 80);
    color: #faeee7;
`;
const Home = styled.div`
    flex-grow: 1;
    border-right: 1px solid #faeee7;
    text-align: center;
`;
const DailyBar = styled(Home)``;
const WeeklyBar = styled(Home)``;
const MonthlyBar = styled(Home)`
    border: none;
`;
const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background-color: inherit;
    color: #faeee7;
`;