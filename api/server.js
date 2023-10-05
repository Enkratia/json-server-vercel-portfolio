const fs = require("fs");
const path = require("path");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Add this before server.use(router)
const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);

const router = jsonServer.router(db);
server.db = router.db;

server.use(middlewares);
server.use(auth);

// Add server.use(router)
server.use(router);
server.listen(3000, () => {
  console.log("Server started");
});

// Export the Server API
module.exports = server;
