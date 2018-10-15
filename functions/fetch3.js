exports.handler = function(event, context, callback) {
  setTimeout(
    () =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(event)
      }),
    Number(event.queryStringParameters.msec)
  );
};
