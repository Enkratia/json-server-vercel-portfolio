// See https://github.com/typicode/json-server#module
const path = require("path");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
// const router = jsonServer.router("db.json");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.db = router.db;

// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);
server.use(
  auth.rewriter({
    users: 664,
    messages: 664,
    "/api/*": "/$1",
  }),
);

// My code
server.use(middlewares);
server.use(auth);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
