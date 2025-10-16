import http from 'k6/http';
import { token } from './env.js';

export function DUO_detail_logs_cosec() {
    const url = 'https://corsec.inet.co.th/duo_service/api/v1/detail/10/1';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        sub: ['all'],
        main: [],
        status: [],
        start_date: '02/09/2568 00:00',
        end_date: '02/09/2568 23:59',
        sort: 'DESC',
        search: ''
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
