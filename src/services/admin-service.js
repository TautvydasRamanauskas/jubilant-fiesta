import callApi from './call-service';

export default {
    fetchLimits() {
        return callApi(`/admin/limits/`, 'GET');
    },
}
