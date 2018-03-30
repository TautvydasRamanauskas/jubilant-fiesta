import {API_URL} from '../config';

const call = (endpoint, method, data) => {
    // if (method !== 'GET') {
    //     data = {
    //         ...data,
    //         key: '8NpIU1YWqm-z1tvRLEeJt-jRoYbl1qf5',
    //     };
    // }
    return fetch(API_URL + endpoint, {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json',
        },
        method,
    })
};

export default call;
