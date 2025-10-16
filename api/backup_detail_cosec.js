import http from 'k6/http';
import { token } from './env.js';

export function backup_detail_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/dr/backup_detail/1/10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        sub: ['all'],
        main: []
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
