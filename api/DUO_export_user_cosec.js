import http from 'k6/http';
import { token } from './env.js';

export function DUO_export_user_cosec() {
    const url = 'https://corsec.inet.co.th/duo_service/api/v1/export/users';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        main: ['all'],
        sub: ['all'],
        start_date: '03/09/2568 00:00',
        end_date: '03/09/2568 23:59',
        search: '',
        sort: 'DESC',
        status: []
    });

    const response = http.post(url, payload, { headers });

    console.log('Response body:', response.body);

    return response;
}
