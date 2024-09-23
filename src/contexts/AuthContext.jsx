import React, { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Authcontext = createContext({});

export const AuthProvider = ({ children }) => {
    const baseurl = 'http://127.0.0.1:8000/api';
    const [user, setuser] = useState();
    const [errors, seterrors] = useState([]);
    const navigate = useNavigate();

    const signup = async ({ ...data }) => {
        try {
            console.log("Data being sent:", data);
            await axios.post(`${baseurl}/signup`, data).then(res => {
                console.log(res.data);
                setuser(res.data.user);
            });
            navigate('/homepage');
        } catch (err) {
          console.log("Error response:", err.response.data);
          if (err.response.data.errors) {
            seterrors(err.response.data.errors);
          } else {
            seterrors({ message: "Unknown error" });
          }
        }
    };

    const login = async ({ ...data }) => {
        try {
          console.log("Data being sent:", data);
            await axios.post(`${baseurl}/login`, data).then(res => {
                console.log(res.data);
                setuser(res.data.user);
            });
            navigate('/homepage');
        } catch (err) {
            console.log("Error response:", err.response.data);
            console.log(err);
            seterrors(err.response.data.errors);
        }
    };

    const logout = async () => {
        try {
            await axios.post(`${baseurl}/logout`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                console.log(res.data);
            });
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Authcontext.Provider value={{ user, signup, login, logout, errors }}>
            {children}
        </Authcontext.Provider>
    );
};

export default function useAuthContext() {
    return useContext(Authcontext);
}
