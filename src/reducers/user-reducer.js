const login = (state, {user}) => ({
    ...state,
    ...user,
});

const logout = (state) => ({});

const updateOptions = (state, {options}) => ({
    ...state,
    options,
});

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return login(state, action);
        case 'LOGOUT_SUCCESS':
            return logout(state);
        case 'OPTIONS_UPDATE':
            return updateOptions(state, action);
        default:
            return state;
    }
};
