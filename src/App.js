import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./store";
import MainPage from './components/MainPage';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="" component={MainPage} />
          </div>
        </Router>
      </Provider>
  );
}

export default App;
