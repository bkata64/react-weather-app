import React from 'react'
import { Navigate } from 'react-router'

const Protected = ({ children, isLogged}) => {
    if (!isLogged) <Navigate to="/" replace /> 
    else return children;  
}

export default Protected