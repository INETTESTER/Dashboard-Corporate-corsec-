import http from 'k6/http';
import { token } from './env.js';

export function Scan_port_Edit_Add_IP_cosec() {
    const url = 'https://corsec.inet.co.th/s/com/api/v3/edit/addip';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    };

    const payload = JSON.stringify({
        hosts: [
            {
                vm_name: "-",
                ip: "203.151.231.240",
                tcp: ["344"],
                remark_ip: "test"
            },
            {
                vm_name: "-",
                ip: "123.1233.2.32",
                tcp: ["34", "334"],
                remark_ip: "-"
            }
        ],
        _id: "689bff4e6aea82a97d2b17f2"
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
