const jsonServer = 'http://localhost:3001';

export function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.error && data.error.description) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export function handlePost(endpoint: string, body: object) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(`${jsonServer}/${endpoint}`, requestOptions).then(handleResponse);
}

export function handlePatch(endpoint: string, body: object) {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  return fetch(`${jsonServer}/${endpoint}`, requestOptions).then(handleResponse);
}

export function handleGet(endpoint: string, parameters?: any) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let query = '';
  if (parameters) {
    let esc = encodeURIComponent;
    query = Object.keys(parameters)
      .map((k) => esc(k) + '=' + esc(parameters[k]))
      .join('&');
  }

  return fetch(
    `${jsonServer}/${endpoint}?${query}`,
    requestOptions,
  ).then(handleResponse);
}

export function handleDelete(endpoint: string) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${jsonServer}/${endpoint}`, requestOptions).then(handleResponse);
}

