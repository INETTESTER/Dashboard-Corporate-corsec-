import http from 'k6/http';
import { token } from './env.js';

export function EDR_ecurity_detail_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/edr/security_detail/1/10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        search: '',
        type: [],
        device_status: [],
        antivirus: [],
        antivirus_status: [],
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
