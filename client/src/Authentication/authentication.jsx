
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const register = async (name, email, password, role) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/signup', { name, email, password, role }, { withCredentials: true });
            setLoading(false);
            if (response.status === 201) {
                navigate('/login');
                alert("Registration Successful");
            }
        } catch (error) {
            console.error('Registration error', error);
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password }, { withCredentials: true });
            setUser(response.data.user);
            setIsAuthenticated(true);
            setLoading(false);
            navigate('/');
        } catch (error) {
            console.error('Login error', error);
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:3000/logout', null, { withCredentials: true });
            setUser(null);
            setIsAuthenticated(false);
            navigate('/login');
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const navigate = useNavigate();

//     const register = async (name, email, password, role) => {
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:3000/signup', { name, email, password, role }, { withCredentials: true });
//             setLoading(false);
//             if (response.status === 201) {
//                 navigate('/login'); 
//                 alert("Registration Successfull");
//             }
//         } catch (error) {
//             console.error('Registration error', error);
//             setLoading(false);
//         }
//     };

//     const login = async (email, password) => {
//         setLoading(true);
//         try {
//             const response = await axios.post('http://localhost:3000/login', { email, password }, { withCredentials: true });
//             setUser(response.data.user);
//             setIsAuthenticated(true);
//             setLoading(false);
//             navigate('/'); 
//         } catch (error) {
//             console.error('Login error', error);
//             setLoading(false);
//         }
//     };

//     const logout = () => {
//         setUser(null);
//         setIsAuthenticated(false);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, register, loading, isAuthenticated }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);


