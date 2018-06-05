import AdminService from '../services/admin-service';

export const fetchLinksCount = () => dispatch => {
    AdminService.fetchLinksCount()
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(json => {
            dispatch({
                type: "LINKS_COUNT_FETCHED",
                count: json,
            });
        })
        .catch(err => {
            if (err) {
                alert('Failed to fetch links count');
            }
        });
};

export const deleteLinks = () => dispatch => {
    AdminService.deleteLinks()
        .then(response => {
            if (response.ok) {
                dispatch({
                    type: "LINKS_COUNT_FETCHED",
                    count: 0,
                });
            } else {
                throw response;
            }
        })
        .catch(err => {
            if (err) {
                alert('Failed to delete links');
            }
        });
};

export const openLinksRemove = () => ({
    type: 'LINKS_REMOVE_OPEN',
});

export const closeLinksRemove = () => ({
    type: 'LINKS_REMOVE_CLOSE',
});
