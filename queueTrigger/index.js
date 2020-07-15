const axios = require('axios');

module.exports = async function (context, message) {
  var timeStamp = new Date().toISOString();
  context.log(`${timeStamp} > Queue trigger function invoked`);
};
