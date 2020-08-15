const getIP = () => {
  const ip = 'http://api.ipify.org?format=json';
  return fetch(ip)
  .then(response => response.json())
  .then(data => console.log(data.ip))
  .catch(() => {})
}
export default getIP;