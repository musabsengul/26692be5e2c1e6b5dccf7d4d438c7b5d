import axios from 'axios';
import {constant} from "../config/constant";


export const $axios = axios.create();

$axios.interceptors.request.use(
    (config) => {
        let headers = {
            "X-Access-Token": constant.API_KEY,
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
