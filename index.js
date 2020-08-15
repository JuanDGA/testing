
const getIP = ()=>{
  const input = document.createElement('input');
  const ip = document.querySelector('body').appendChild(input);
  ip.style.display = 'none';
  return fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    return ip.value = data.ip,
    ip.name = 'ip',
    console.log(document.querySelector('input').value),
    fetch('./php.php', {
      method: 'POST',
      body: ip.value,
    }).then(response => console.log(response)
    .then(data => console.log(data))
    .catch(err=>console.log(err)));
  })
  .catch((err) => {console.log('hola')});
};

getIP();