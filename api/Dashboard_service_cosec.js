import http from 'k6/http';
import { token } from './env.js';

export function Dashboard_service_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/service/';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        main: [],
        sub: ['8551']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
