import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminRoute,
  isAdmin,
  redirect = '/',
  redirectAdmin = '/paintings'
}: any) => {
  
  console.log("Enter in protected route")
  console.log('!isAuthenticated', isAuthenticated)

  
  if (!isAuthenticated) {
    // false && true = false
    return <Navigate to={redirect} />
  }

  if (adminRoute && isAuthenticated) {
    console.log('adminRoute && isAuthenticated', isAuthenticated)
    return <Navigate to={redirectAdmin} />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute;
