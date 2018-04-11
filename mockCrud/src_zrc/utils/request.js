import fetch from 'dva/fetch';
import { type } from 'os';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  let body = options.body
  if(!body) body = ''
  else if(typeof(body) === 'object') body = JSON.stringify(body)
  else if(typeof(body)!=='string') body = ''

  
  return fetch(url, {...options, headers, body: JSON.stringify(options.body)})
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
