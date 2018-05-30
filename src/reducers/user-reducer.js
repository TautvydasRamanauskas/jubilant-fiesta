const login = (state, {id, level}) => ({
    ...state,
    id,
    level,
});

const logout = (state) => ({});

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return login(state, action);
        case 'LOGOUT_SUCCESS':
            return logout(state);
        default:
            return state;
    }
};
