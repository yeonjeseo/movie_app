import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation"
import "./App.css";

function App() {
    return  <HashRouter>
        <Navigation />
        <Route path="/home">

        </Route>
        <Route path="/about">

        </Route>
    </HashRouter>
}

export default App;