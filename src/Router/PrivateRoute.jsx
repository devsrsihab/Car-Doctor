import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
  // use user context
  const {user,loading} = useContext(AuthContext)

  // is loading 
  if (loading) {
    return <>
    <div className="loader w-full h-[300px] flex justify-center items-center  bg-black/70">
    <span className="loading loading-bars bg-white loading-lg"></span>

    </div>
    </>
  }
  if (user.email) {
    return children
  }

  return <Navigate to='/login' replace ></Navigate>



}
PrivateRoute.propTypes = {
  children: PropTypes.node
}

export default PrivateRoute