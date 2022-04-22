import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStatus} from "../hooks/useAuthStatus";

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if(checkingStatus) {
        return <h3> Loading... </h3>
    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute