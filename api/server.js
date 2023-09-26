const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("api/db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

// Add this before server.use(router)
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//     "/api/users": "/users",
//   }),
// );
// server.use(
//   auth.rewriter({
//     users: 664,
//     messages: 664,
//     "/api/*": "/$1",
//     "/api/users": "/users",
//   }),
// );
// Hello

// My code
server.use(auth);
server.use(middlewares);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
