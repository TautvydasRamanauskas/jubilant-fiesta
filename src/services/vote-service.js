import callApi from './call-service';

export default {
    addVote(vote) {
        return callApi(`/vote/`, 'POST', {...vote});
    },

    removeVote(vote) {
        return callApi(`/vote/`, 'DELETE', vote);
    },
}
