import http from 'k6/http';
import { token } from './env.js';

export function SIEM_export_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/siem/export-detail';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        brand: ['FortiSIEM'],
        start_date: '',
        end_date: '',
        search: '',
        category_name: [],
        duration: '',
        main: [],
        sub: ['11784']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
