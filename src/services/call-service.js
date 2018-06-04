import {API_URL} from '../config';

const call = (endpoint, method, data) => {
    return fetch(API_URL + endpoint, {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic YzYxM2FmZGItODhiMi00OWI5LThlNWEtY2UyMjRmMDcyMmNjOjllZTEyNDhmLWNlYWMtNGUzYS1hODg2LWE4YWYzNDA4NTMxNg==',
        },
        method,
    })
};

export default call;
