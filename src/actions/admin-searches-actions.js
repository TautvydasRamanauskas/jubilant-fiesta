import AdminService from '../services/admin-service';

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
