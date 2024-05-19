import React from 'react'

import { Navigate,useLocation  } from 'react-router-dom'

const ProtectedRoute = ({component: Component, allowedRoles}) => {
    const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser && allowedRoles && allowedRoles.length > 0 && allowedRoles.includes(storedUser.role)) {
    return <Component />;
  } else {
    return <Navigate to="/" state={{from: location}} />;
  }
}


export default ProtectedRoute