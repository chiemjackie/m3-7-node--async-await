const request = require('request-promise');

async function getDadJoke() {
  const response = await request({
    url: 'https://icanhazdadjoke.com',
    headers: {"Accept" : "application/json"},
    json: true
  });
  return response.joke;
}

getDadJoke().then((data) => console.log(data));