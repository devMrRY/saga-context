import React from "react";
import { connect } from "react-redux";
// import {Inc, Dec} from './actions';
import AnotherComp from "./anotherComp";

import UserProvider, { userContext } from "../context/userContext";
import Count from "./count";

function ContextComponent() {
  return (
    <div className="ContextComponent">
      <UserProvider>
        <Count />
        <AnotherComp />
      </UserProvider>
    </div>
  );
}

const mapStateToprops = ({ User }) => {
  let ct = User.count * 2;
  return { count: ct };
};
const mapStateToDispatch = (dispatch) => ({
  Inc: () => dispatch({ type: "INC" }),
  Dec: () => dispatch({ type: "DEC" }),
});
export default connect(mapStateToprops, mapStateToDispatch)(ContextComponent);
