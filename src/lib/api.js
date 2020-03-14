import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

export async function call(path, params = false, auth = false, method = false, data) {
  const fullPath = params
    ? finalPath(path, params)
    : path;

  return !method
    ? await get(fullPath, auth)
    : await write(fullPath, auth, method, data);
}

const finalPath = (path, str) => path.replace('*', str);

export async function get(path, auth) {
  const res = await fetch(`${URI}/${path}`, {
    method: 'get',
    headers: {
      authorization: auth ? getToken() : '',
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

async function write(path, auth, method, data) {
  const res = await fetch(`${URI}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'authorization': auth ? getToken() : '',
    },
    body: JSON.stringify(data),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

function getToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('no token');
  }
  return token;
}

export async function getSubscriptions(zip) {
  const res = await fetch(`${URI}/subscriptions/get?zip=${zip}`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getSubscription(id) {
  const res = await fetch(`${URI}/subscription/get/${id}`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function login(body) {
  const res = await fetch(`${URI}/user/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function register(body) {
  const res = await fetch(`${URI}/user/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function isLoggedIn() {
  const res = await fetch(`${URI}/user/isloggedin`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function subscribe(body) {
  const res = await fetch(`${URI}/usersubscription/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getUserSubscriptions() {
  const res = await fetch(`${URI}/usersubscription/get`, {
    method: 'get',
    headers: {
      'authorization': getToken(),
    }
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function cancelUserSubscription(id) {
  const res = await fetch(`${URI}/usersubscription/cancel/${id}`, {
    method: 'PATCH',
    headers: {
      'authorization': getToken(),
      'Content-Type': 'application/json',
    },
  });

  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getSpots(data) {
  const res = await fetch(`${URI}/location/get`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getOneSpot(id) {
  const res = await fetch(`${URI}/company/getone/${id}`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function addCreditCard(body) {
  const res = await fetch(`${URI}/user/addcreditcard`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getCredits() {
  const res = await fetch(`${URI}/credit/get`, {
    headers: {
      'authorization': getToken(),
    }
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function useCredit(id) {
  const res = await fetch(`${URI}/credit/use/${id}`, {
    method: 'PATCH',
    headers: {
      'authorization': getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getCompanyData() {
  const res = await fetch(`${URI}/company/getdashboard`, {
    headers: {
      'authorization': getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function createItem(body) {
  const res = await fetch(`${URI}/item/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function createSubscription(body) {
  const res = await fetch(`${URI}/subscription/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function addLocation(body) {
  const res = await fetch(`${URI}/location/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function publishCompany() {
  const res = await fetch(`${URI}/company/publish`, {
    method: 'PATCH',
    headers: {
      'authorization': getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function unpublishCompany() {
  const res = await fetch(`${URI}/company/unpublish`, {
    method: 'PATCH',
    headers: {
      'authorization': getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}