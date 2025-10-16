import http from 'k6/http';
import { token } from './env.js';

export function Log_status_export_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/logs/detail-export';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        sub: ['14848'],
        main: [],
        status: [],
        type: [],
        firewall: [],
        last_found_date: [],
        search: '',
        sort: 'DESC'
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
