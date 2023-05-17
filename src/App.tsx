import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import Order from "./components/Orders";

const App = () => {
    return (
        <div className="containers">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Admin/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
                <Route path={"/order"} element={<Order/>}/>
            </Routes>
        </div>
    );
};

export default App;