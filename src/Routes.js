import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from "./user/userDashboard";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element={<Home/>} />
                <Route path="/signin" exact element={<Signin/>} />
                <Route path="/signup" exact element={<Signup/>} />
                <Route path="/dashboard" exact element={<PrivateRoute />} >
                <Route exact path="" element={<Dashboard/>}  >
                    </Route>
                    </Route>
            </Routes>
        </BrowserRouter>  
    ); 
};
 
export default  AppRoutes;
