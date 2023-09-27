const PORT = process.env.PORT || 3000;

const jsonServer = require("json-server");
const auth = require("json-server-auth");

const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(
  cors({
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    origin: true,
  }),
);

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
