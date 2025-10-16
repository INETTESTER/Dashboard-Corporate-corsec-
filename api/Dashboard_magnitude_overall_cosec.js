import http from 'k6/http';
import { token } from './env.js';

export function Dashboard_magnitude_overall_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/dashboard/magnitude-overall';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        search: '',
        today: false,
        main: [],
        sub: ['14126']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
