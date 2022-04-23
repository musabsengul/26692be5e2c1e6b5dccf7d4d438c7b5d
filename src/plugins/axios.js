import axios from 'axios';


export const $axios = axios.create();

$axios.interceptors.request.use(
    (config) => {
        let headers = {
            "X-Access-Token": "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",
        };
        config.headers = headers;
        return config;
    },
    error => Promise.reject(error),
);

$axios.interceptors.response.use(
    response => response.data,
    async error => {
        return Promise.reject(error.response.data);
    },
);

export default $axios
