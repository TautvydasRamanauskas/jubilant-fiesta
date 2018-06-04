import AdminService from '../services/admin-service';

export const fetchLimits = () => dispatch => {
    AdminService.fetchLimits()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: "LIMITS_FETCHED",
                limits: json,
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to fetch limits');
            }
        });
};

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

export const fetchSearches = () => dispatch => {
    AdminService.fetchSearches()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: "SEARCHES_FETCHED",
                searches: json,
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to fetch searches');
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

export const cleanCache = keyword => dispatch => {
    AdminService.cleanCache(keyword)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: "SEARCHES_FETCHED",
                searches: json,
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to clean cache');
            }
        });
};