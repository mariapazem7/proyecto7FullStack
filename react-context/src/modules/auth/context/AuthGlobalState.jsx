import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { loginService, registerService } from "../services/authApiService";
import { AuthContext } from "./AuthContext";


const initialState = {
    user: null,
    token: null
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    const login = async({ correo, password }) => {
        try {
            const dataLogin = await loginService({ correo, password });
            const token = dataLogin.custom?.token;
            const user = dataLogin.data; 

            if(!token || !user) {
                throw new Error("No se pudo iniciar sesión");
            }

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({
                type: 'LOGIN',
                payload: { user, token }
            });

        } catch (error) {
            console.error("Error logging in:", error);
            throw new Error(error);
        }
    }

    const register = async(userData) => {
        try {
            const registerData = await  registerService(userData);

            const user = registerData.data;

            if (!user) {
                throw new Error("No se pudo registrar el usuario");
            }

            dispatch({
                type: 'REGISTER',
                payload: { user }
            })
        } catch (error) {
            console.error("Error registering:", error);
            throw new Error(error);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        dispatch({
            type: 'LOGOUT'
            
        })
    }

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}