import http from 'k6/http';
import { token } from './env.js';

export function Login_fail_export_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/login_fail/export';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        magnitude: [],
        start_date: '18/04/2568',
        end_date: '18/07/2568',
        search: '',
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
