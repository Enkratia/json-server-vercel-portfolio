const PORT = process.env.PORT || 3000;

const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

// Add this before server.use(router)
server.use(middlewares);
server.use(auth);

server.use(router);
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

// Export the Server API
module.exports = server;

module.exports = function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "YOUR_URL"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
};
