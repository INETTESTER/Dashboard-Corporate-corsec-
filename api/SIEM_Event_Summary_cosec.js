import http from 'k6/http';
import { token } from './env.js';

export function SIEM_Event_Summary_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/siem/event-summary';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        brand: ['FortiSIEM'],
        start_date: '18/01/2566',
        end_date: '19/09/2568',
        search: '',
        category_name: [],
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
