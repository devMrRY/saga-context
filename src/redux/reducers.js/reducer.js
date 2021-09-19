const initialState = {
  isAuth: false,
  userData: {},
  count: 10,
  users: [],
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNT": {
      return { ...state, count: state.count + 1 };
    }
    case "DEC_COUNT": {
      return { ...state, count: state.count - 1 };
    }
    case "ADD_USERS": {
      return { ...state, users: [...state.users, action.payload] };
    }
    case "DEL_USERS": {
      return { ...state, users: deleteUser(action.payload.id) };
    }
    case "EDIT_USERS": {
      return { ...state, users: editUser(action.payload) };
    }
    default: {
      return state;
    }
  }
};

export default User;

function deleteUser(id, _arr) {
  _arr = _arr.filter((user) => user.id !== id);
  return _arr;
}

function editUser(data, _arr) {
  _arr = _arr.map((user) => (user.id === data.id ? data : user));
  return _arr;
}
