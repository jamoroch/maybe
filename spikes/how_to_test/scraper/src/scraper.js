const rp = require('request-promise');
const url = 'http://127.0.0.1:5000/index';

rp(url).then( function(html) {
  console.log(html);
})
.catch(function(error) {
  console.error(error);
});

