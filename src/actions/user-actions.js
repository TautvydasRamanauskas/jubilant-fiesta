import UserService from '../services/user-service';

export const login = (response) => dispatch => {
    const {accessToken, userID} = response;

    UserService.login(userID, accessToken)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                user: json
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to login');
            }
        });
};

export const logout = () => {
    return {
        type: 'LOGOUT_SUCCESS',
    };
};