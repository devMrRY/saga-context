import React, { useState } from "react";

export const userContext = React.createContext({});

const emptyState = () => ({
  isAuth: false,
  userData: {},
  count: 123,
});

const UserProvider = (props) => {
  const [state, setState] = useState(emptyState());

  const updateCount = (value) => {
    setState((prev) => ({ ...prev, count: prev.count + value }));
    // setState({...state, count: state.count + 1})
  };
  return (
    <userContext.Provider value={[state, updateCount]}>
      {props.children}
    </userContext.Provider>
  );
};
export default UserProvider;
