import http from 'k6/http';
import { token } from './env.js';

export function Log_status_overview_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/logs/overview';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        sub: ['C01-005733'],
        main: []
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
