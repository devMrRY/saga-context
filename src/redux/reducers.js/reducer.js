const initialState = {
    isAuth: false,
    userData: {},
    count: 10
};

const User = (state=initialState, action) => {
    switch(action.type){
        case "ADD_COUNT": {
            return {...state, count: state.count+1}
        }
        case "DEC_COUNT": {
            return {...state, count: state.count-1}
        }
        default: {
            return state
        }
    }
}

export default User