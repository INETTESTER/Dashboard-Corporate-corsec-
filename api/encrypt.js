import http from 'k6/http';

export function encrypt() {
    const url = 'https://corsec.inet.co.th/all_service/auth/encrypt';
    const headers = {
        'Content-Type': 'application/json',
    };

    const payload = JSON.stringify({
        username: 'test',
        password: 'test',
        expire: null
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
