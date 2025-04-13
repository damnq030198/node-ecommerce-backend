const app = require("./src/app");

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`WSV eComerce started with ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed");
    // app.notify("Server closed");
  });
});
