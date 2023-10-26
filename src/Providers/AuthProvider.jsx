import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const authInfo = {};
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node,

}

export default AuthProvider;

// 1. make a context out of function
// 2. define the content tower undeer the context like: <AuthContext.Provider> </AuthContext.Provider>
// 3. set a props value of this authcontext tower
// 4. make whole app chikl under the authcontext tower 
// 5. now use children props in AuthContext Tower
