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
server.listen(3000, () => {
  console.log("Server started");
});

// Export the Server API
module.exports = server;
