import http from 'k6/http';
import { token } from './env.js';

export function Login_fail_graph_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/login_fail/graph';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        start_date: '12/05/2567',
        end_date: '',
        main: [],
        sub: ['C02-000123']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
