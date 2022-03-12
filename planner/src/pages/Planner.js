import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlanModal from "../components/PlanModal";

function Planner(props) {
    let [plan, setPlan] = useState([]);
    const [planModal, setPlanModal] = useState(false);
    return (
        <div>
            <MainPlanner>
                {planModal === true ? (
                    <PlanModal
                        setPlanModal={setPlanModal}
                        plan={plan}
                        setPlan={setPlan}
                    />
                ) : null}
                <PlannerHeader>
                    <PlannerTitle>
                        <p>Seize the day</p>
                    </PlannerTitle>
                    <PlannerDate>
                        <MediumFont border={"2px solid"}>
                            <p>Date</p>
                        </MediumFont>
                        <MediumFont border={"2px solid"}>
                            <p>D - Day</p>
                        </MediumFont>
                        <LargeFont border={"2px solid"}>
                            <p>D - ??</p>
                        </LargeFont>
                        <LargeFont border={"2px solid"}>
                            <p>
                                <SelectTime></SelectTime>H
                                <SelectTime> </SelectTime>M
                            </p>
                        </LargeFont>
                    </PlannerDate>
                </PlannerHeader>
                <PlannerBody>
                    <Plan>
                        <MediumFont>
                            <p>Plan</p>
                        </MediumFont>
                        <table>
                            <thead></thead>
                            <tbody>
                                {plan.map(function (a, i) {
                                    return (
                                        <AddPlan
                                            plan={a}
                                            alignCenter={props.alignCenter}
                                            key={i}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                        <AddPlanBtn
                            onClick={() => {
                                setPlanModal(true);
                            }}
                        >
                            + add plan
                        </AddPlanBtn>
                    </Plan>
                    <TimeTable>
                        <MediumFont>Time Table</MediumFont>
                    </TimeTable>
                </PlannerBody>
            </MainPlanner>
        </div>
    );
}

function AddPlan(props) {
    return (
        <tr>
            <td>{props.plan.a}</td>
            <td>{props.plan.b}</td>
            <td className="text-center">
                <CheckedPlan type="checkbox"></CheckedPlan>
            </td>
        </tr>
    );
}

const CheckedPlan = styled.input`
    width: 20px;
    height: 20px;
    margin: 0;
    margin-top: 3px;
    padding: 0;
`;

const MainPlanner = styled.div`
    width: 100vw;
    height: 100vh;
`;
const PlannerHeader = styled.div`
    display: flex;
    padding-top: 65px;
    width: 100%;
    height: 300px;
`;
const MediumFont = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 5px;
    border-bottom: ${(props) => props.border || "none"};
`;
const LargeFont = styled(MediumFont)`
    text-align: center;
    font-size: 30px;
`;
const PlannerTitle = styled(LargeFont)`
    width: 60%;
`;
const PlannerDate = styled.div`
    width: 40%;
    max-width: 500px;
    padding: 10px;
`;
const PlannerBody = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
`;
const Plan = styled.div`
    width: 60%;
    padding: 10px;
`;
const TimeTable = styled.div`
    width: 40%;
    max-width: 500px;
    padding: 10px;
`;
const AddPlanBtn = styled.button`
    margin: 10px;
    float: right;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 1px 1px gray;
`;
const SelectTime = styled.select``;

export default Planner;
