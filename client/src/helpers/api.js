import { API_BASE } from '../constants';
// get
export const post = (route, body) =>
  fetch(API_BASE + route, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
