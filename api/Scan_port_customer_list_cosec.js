import http from 'k6/http';
import { token } from './env.js';

export function Scan_port_customer_list_cosec() {
    const url = 'https://corsec.inet.co.th/s/com/api/v1/edit/list?page=1&perpage=10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        main: [],
        sub: ['all'],
        search: '',
        sort: 'ก-ฮ',
        interest: []
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
