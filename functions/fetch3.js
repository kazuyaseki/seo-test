exports.handler = function(event, context, callback) {
  setTimeout(
    () =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(event)
      }),
    3000
  );
};
