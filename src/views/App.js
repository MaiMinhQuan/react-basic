import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Nav/Nav";
import Home from "./Example/Home";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ListUser from "./Users/ListUser";

import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <MyComponent /> */}
          {/* <ListToDo /> */}
          {/* <Home /> */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todo">
              <ListToDo />
            </Route>

            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
