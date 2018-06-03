import UserService from '../services/user-service';

export const login = (response) => dispatch => {
    UserService.login(response)
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

export const updateOptions = options => dispatch => {
    UserService.updateOptions(options)
        .then(response => {
            if (response.ok) {
                dispatch({
                    type: 'OPTIONS_UPDATE',
                    options,
                });
            } else {
                throw response;
            }
        })
        .catch(err => {
            if (err) {
                alert('Failed to update options');
            }
        });
};