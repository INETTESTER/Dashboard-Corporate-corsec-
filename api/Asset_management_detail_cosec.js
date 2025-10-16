import http from 'k6/http';
import { token } from './env.js';

export function Asset_management_detail_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/asset/detail/1/10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        search: 'b',
        device_status: [],
        main: [],
        sub: ['17131']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
