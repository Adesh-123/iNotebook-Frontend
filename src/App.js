import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/Alert"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import { useState } from "react";
import Visiblepage from "./components/Visiblepage";



function App() {
  const [alert, setAlert] = useState(null);
  
    const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Visiblepage/>
          </Route>
          <Route  exact path="/about">
               <About />
          </Route>
          <Route exact  path="/Home">
              <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/login">
                <Login showAlert={showAlert} />
          </Route>
          <Route exact path="/signup">
                <Signup showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
