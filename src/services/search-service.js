import callApi from './call-service';

export default {
    search(keyword) {
        return callApi(`/search/${keyword}`, 'POST');
    },

    mostPopular() {
        return callApi(`/search/popular/`, 'GET');
    },

    generateReport(results) {
        return callApi(`/report/`, 'POST', results);
    },

    generatedLink(results) {
        return callApi(`/link/`, 'POST', results);
    },

    link(link) {
        return callApi(`/link/${link}`, 'GET');
    },
}
