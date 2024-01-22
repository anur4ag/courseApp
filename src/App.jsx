
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles.css";

import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from "./components/Register";
import Courses from "./components/Courses";
import { Route, Routes, Link, useLocation, Outlet } from "react-router-dom";
import { ChakraProvider} from '@chakra-ui/react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "../Server/Firebase/Firebase.jsx";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

import Editcourses from './components/Editcourses';
import Createcourses from './components/Createcourses';
import Check2 from './components/Check2';
import Checkcourses from './components/Checkcourses';

import Changecourses from './components/Changecourses';
function App() {
  const [usertype, setUserType] = useState(null);
  const [logged, setLogged] = useState(null);
  const [creator, setCreator] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(user);
      } else {
        setLogged(null);
      }
    });
     
  }, []);

  
   
  
  return (
    <ChakraProvider  resetCSS={false}>

      {/* <Navbar logged={logged} setLogged={setLogged}/> */}
      <Navbar2 logged={logged} setLogged={setLogged}/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register userType={usertype}/>} />
        <Route path="/"element={<Home logged={logged}/>} />
        <Route path="/courses"element={<Courses logged={logged} />} />
        <Route path="/render" element={<Check2 set={setUserType}/>} />
        <Route path="/editcourses" element={<Editcourses />} />
        <Route path="/createcourses" element={<Createcourses logged={logged}/>} />
        <Route path="/checkcourses" element={<Checkcourses logged={logged} creator={creator}/>} />
        <Route path="/changecourses" element={<Changecourses  />} />
       
      </Routes>
      
    </ChakraProvider>
  )
}
function Home({logged}) {
  return (
    <>
      <Hero logged={logged} />
      
      <Footer />
    </>
  );
}

export default App
