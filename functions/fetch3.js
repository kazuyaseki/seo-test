exports.handler = function(event, context, callback) {
  setTimeout(
    () =>
      callback(null, {
        statusCode: 200,
        body: 'Fetched!!'
      }),
    3000
  );
};
