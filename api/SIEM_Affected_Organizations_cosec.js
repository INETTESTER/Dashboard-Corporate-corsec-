import http from 'k6/http';
import { token } from './env.js';

export function SIEM_Affected_Organizations_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/siem/organization';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        brand: ['FortiSIEM', 'SIEM-QRadar'],
        start_date: '27/06/2567',
        end_date: '27/06/2569',
        search: '',
        category_name: [],
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
