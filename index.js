require('dotenv').config();
const server = require("./server")

const port = process.env.PORT

server.listen(port, () => {
  console.log(`server is listening on https://localhost:${port}`);
})