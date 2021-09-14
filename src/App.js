import React from "react";
import { connect } from "react-redux";
// import {Inc, Dec} from './actions';
import AnotherComp from "./components/anotherComp";

import UserProvider, { userContext } from "./context/userContext";
import Count from "./components/count";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Count />
        <AnotherComp />
      </UserProvider>
    </div>
  );
}

const mapStateToprops = ({ User }) => {
  return { count: User.count };
};
const mapStateToDispatch = (dispatch) => ({
  Inc: () => dispatch({ type: "INC" }),
  Dec: () => dispatch({ type: "DEC" }),
});
export default connect(mapStateToprops, mapStateToDispatch)(App);
