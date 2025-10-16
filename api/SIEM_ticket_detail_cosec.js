import http from 'k6/http';
import { token } from './env.js';

export function SIEM_ticket_detail_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/siem/ticket-detail';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        ticket_id: 250507667
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
