import http from 'k6/http';
import { token } from './env.js';

export function SIEM_expoort_ticket_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/siem/export-ticket';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        brand: 'FortiSIEM',
        category_name: 'Brute Force Login Success',
        search: '6',
        main: [],
        sub: ['14848']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
