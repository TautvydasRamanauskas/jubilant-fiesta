import AdminService from '../services/admin-service';

export const fetchUsers = () => dispatch => {
    AdminService.fetchUsers()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: "USERS_FETCHED",
                users: json,
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to fetch users');
            }
        });
};

export const changeLevel = (userId, level) => dispatch => {
    AdminService.updateLevel(userId, level)
        .then(response => {
            if (response.ok) {
                dispatch({
                    type: "LEVEL_CHANGE",
                    userId,
                    level,
                });
            } else {
                throw response;
            }
        })
        .catch(err => {
            if (err) {
                alert('Failed to update user level');
            }
        });
};
