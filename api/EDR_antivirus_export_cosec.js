import http from 'k6/http';
import { token } from './env.js';

export function EDR_antivirus_export_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/edr/strike/export';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        brand: 'CrowdStrike',
        tactic: [],
        status: [],
        technique: [],
        start_date: '03/06/2568',
        end_date: '03/09/2568',
        search: '',
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
