import http from 'k6/http';
import { token } from './env.js';

export function Scan_port_Edit_Port_cosec() {
    const baseUrl = 'https://corsec.inet.co.th/s/com';
    const url = `${baseUrl}/api/v1/edit/customer`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        sub: '15497',
        contact: ['test@api.co.th'],
        name: 'กองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.)',
        alert_trigger: true,
        alert_daily: true,
        interest_scan: false
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
