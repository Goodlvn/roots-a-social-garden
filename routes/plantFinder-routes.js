const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants/search?token=sAe0dDZyCrVdJe9k1ePcwrjgedscCASoJiMBAh3wRic&q=coconut');
  const json = await response.json();
  console.log(json);
})();