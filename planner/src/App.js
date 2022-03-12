import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import BtmBar from "./components/BtmBar";
import Login from "./components/Login";
import Signup from "./pages/Signup";
import Planner from "./pages/Planner";
import Month from "./pages/Month";
import Week from "./pages/Week";

function App() {
    const callApi = async () => {
        axios
            .get("/api")
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        callApi();
    }, []);

    const [modal, setModal] = useState(false); 
    return (
        <div>
            {modal === true ? <Login setModal={setModal} /> : null} 
            <NavBar setModal={setModal} /> {/*  */}
            <BtmBar />
            <Switch>
                <Route exact path="/">
                    <div className="main-contents">
                        <div className="main-title">
                            <span>플래너</span>
                        </div>
                        <div className="text-center">
                            <button
                                className="main-start-btn"
                                onClick={() => {
                                    setModal(true);
                                }}
                            >
                                시작하기
                            </button>
                        </div>
                    </div>
                </Route>
                <Route path="/daily">
                    <Planner />
                </Route>
                <Route path="/weekly">
                    <Week />
                </Route>
                <Route path="/monthly">
                    <Month />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
