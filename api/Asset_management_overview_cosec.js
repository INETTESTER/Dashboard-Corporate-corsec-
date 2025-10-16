import http from 'k6/http';
import { token } from './env.js';

export function Asset_management_overview_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/asset/overview/1/10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        search: '',
        status: ['ตรวจสอบแล้ว', 'ยังไม่ได้ตรวจสอบ'],
        main: [],
        sub: ['all']
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
