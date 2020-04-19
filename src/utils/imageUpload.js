import errorThrower from '../utils/errorThrower';

export default async (url, file) => {
  const res = await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });
  const response = await res.blob();
  errorThrower(res, response);
  return response;
};
