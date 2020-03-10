export default ({ status }, { message }) => {
  const statusCode = status.toString()[0];
  if (statusCode === '4' || statusCode === '5')
    throw new Error(message);
};
