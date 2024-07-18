const initialAuthState = {
    user: null,
    isAuth: false
};

export const AuthReducer = (state = initialAuthState, action) => {
    switch(action.type) {
        case "SIGN_UP":
            return { ...state, isAuth: true, user: action.payload };
        case "SIGN_IN":
            return { ...state, isAuth: true, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null, isAuth: false };
        default:
            return state;
    }
};