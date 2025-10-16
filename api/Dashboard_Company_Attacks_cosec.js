import http from 'k6/http';
import { token } from './env.js';

export function Dashboard_Company_Attacks_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/dashboard/company-attacks';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        main: [],
        sub: ['14848', '19920']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
