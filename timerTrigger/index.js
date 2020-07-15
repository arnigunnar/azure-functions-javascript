module.exports = async function (context, timer) {
  var timeStamp = new Date().toISOString();

  if (myTimer.IsPastDue) {
    context.log(`${timeStamp} > JavaScript.Is.Running.Late`);
  }

  context.log(`${timeStamp} > Timer trigger Invoked`);
};
