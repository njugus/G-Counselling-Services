// ProtectedRoute.jsx

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./authentication";

const ProtectedRoute = ({ element: Component }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
      <Component/>
    );
};

export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./authentication";

// const ProtectedRoute = ({ element: Component }) => {
//     const { isAuthenticated, loading } = useAuth();

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!isAuthenticated) {
//         return <Navigate to="/login" replace />;
//     }

//     return <>{<Component/>}</>; 
// };

// export default ProtectedRoute;
