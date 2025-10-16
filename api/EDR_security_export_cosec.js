import http from 'k6/http';
import { token } from './env.js';

export function EDR_security_export_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/edr/security/export';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        search: 'FI',
        type: [],
        device_status: [],
        antivirus: [],
        antivirus_status: [],
        main: [],
        sub: ['17131']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
