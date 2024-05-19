import React from 'react'

import { Navigate,useLocation  } from 'react-router-dom'

const ProtectedRoute = ({component: Component, allowedRoles}) => {
    const location = useLocation();
  const role = localStorage.getItem("role");
  if (allowedRoles.includes(role)) {
    return <Component />;
  } else {
    return <Navigate to="/" state={{from: location}} />;
  }
}


export default ProtectedRoute