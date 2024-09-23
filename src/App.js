import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Layout from "./layouts/layout";
import Homepage from "./layouts/Homepage";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
   <>
<BrowserRouter>
<AuthProvider>
<Routes>
  
  <Route index element={<Layout/>}  />
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/homepage" element={<Homepage/>}/>
</Routes>
</AuthProvider>
</BrowserRouter>
  
   </>
  )
}

export default App