import callApi from './call-service';

export default {
    search(keyword) {
        return callApi(`/search/${keyword}`, {
            method: 'POST',
        });
    }
}
