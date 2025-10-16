import http from 'k6/http';
import { token } from './env.js';

export function Dashboard_event_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/dashboard/event';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        search: '',
        sorted: true,
        today: false,
        main: [],
        sub: ['all'],
        anomaly: []
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
