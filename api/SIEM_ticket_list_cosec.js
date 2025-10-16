import http from 'k6/http';
import { token, token2 } from './env.js';

export function SIEM_ticket_list_cosec() {
    const url = 'https://corsec.inet.co.th/all_service/siem/ticket-list/v2/1/10';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token2,
    };

    const payload = JSON.stringify({
        encryption: 'dHVHNyCXRjDWuuKjcJdIkgtwqie0PX+czBAd52E9SP8L0RvNplfCG24Afti57Rc/hBfepTSGVgZpsZuPsZiWFv/jYmITl3wgaPINzv77Av2w1fUaoqOFfv+DiufTVanXHH0rS8gCsiC+JwWsWGYuIa4IVNEtXhri3R82Z/rx0dax7JZsO98mNV6cKIIMYadgJnMME8T7lHzJUXU9MQxi/QvdY1e73tnm7P1ItM3XHzlGSpGaYQCZqDwryUsx80hbJIW4cSBcjAUpzGFpaZCNGIX0T3mcdR4AMFPxe849FAw='
    });

    const response = http.post(url, payload, { headers });

    //console.log('Response body:', response.body);

    return response;
}
