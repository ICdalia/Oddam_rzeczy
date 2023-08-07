import React, {useState, createContext} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/login/login.js";
import Register from "./components/register/register";
import Layout from "./components/Layout";
import Home from './components/home';
import Logout from "./components/logoutn/logoutn";
import Steps from "./components/steps/indexStep";


export const AppContext = createContext(null)

function App() {
    const [ state, setState ] = useState({
        user: null
    })
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Router>
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  <Route path={"/"} element={<Home />} />
                  <Route path="logowanie" element={<Login/>} />
                  <Route path="rejestracja" element={<Register/>} />
                  <Route path="oddaj-rzeczy" element={<Steps/>} />
                  <Route path="wylogowano" element={<Logout/>} />
              </Route>
          </Routes>
      </Router>

    </AppContext.Provider>
  );
}

export default App;
