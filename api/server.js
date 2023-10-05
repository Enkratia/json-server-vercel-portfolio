const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();

// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.db = router.db;

// Add this before server.use(router)
// server.use(middlewares);
// server.use(auth);

//****************** */
// Uncomment to allow write operations
const fs = require("fs");
const path = require("path");

const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);

const router = jsonServer.router(db);
server.db = router.db;

// Comment out to allow write operations
// const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(auth);
//************ */

server.use(router);
server.listen(3000, () => {
  console.log("Server started");
});

// Export the Server API
module.exports = server;
