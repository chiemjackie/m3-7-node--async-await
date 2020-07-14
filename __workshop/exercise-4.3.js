const request = require('request-promise');

const getGeekJoke = async () => {
  const response = await request({
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    json: true
  });
  return response.joke;
};

getGeekJoke().then(response => console.log(response));