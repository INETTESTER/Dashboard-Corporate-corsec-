import http from 'k6/http';
import { token } from './env.js';

export function Scan_port_detail_cosec() {
    const url = 'https://corsec.inet.co.th/s/com/api/v1/scanport/detail?page=1&perpage=10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        main: [],
        sub: ['8551'],
        status: [],
        search: '',
        sort: 'DESC'
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
