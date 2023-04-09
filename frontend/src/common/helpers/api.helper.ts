import { ApiMethod } from '../enums/api-methods.enum';

const API_URL = import.meta.env.VITE_API_URL;

async function callApi<T>(
    endpoint: string,
    method = ApiMethod.GET,
    body?: unknown
): Promise<T> {
    const url = API_URL + endpoint;

    const res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        throw { status: res.status };
    }

    const json = await res.json();
    return json;
}

export { callApi };
