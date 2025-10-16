import http from 'k6/http';
import { token } from './env.js';

export function DUO_summary_users_cosec() {
    const url = 'https://corsec.inet.co.th/duo_service/api/v1/user/summary';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        sub: ['19920'],
        status: [],
        start_date: '21/05/2568 00:00',
        end_date: '27/05/2568 23:00',
        sort: 'ASC'
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
