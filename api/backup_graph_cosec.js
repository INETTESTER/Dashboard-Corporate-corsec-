import http from 'k6/http';
import { token } from './env.js';

export function backup_graph_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/dr/backup';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
