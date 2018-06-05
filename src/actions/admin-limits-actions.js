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
