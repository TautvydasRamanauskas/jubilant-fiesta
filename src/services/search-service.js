import callApi from './call-service';

export default {
    search(keyword, user) {
        return callApi(`/search/${keyword}`, 'POST', {...user});
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

    link(link, user) {
        return callApi(`/link/${link}`, 'POST', user);
    },
}
