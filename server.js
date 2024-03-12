const express = require('express')
const server = express()

const users = [
  {
    "name": "Isaac",
    "age": 22,
    "email": "Isaacmalin@gmail.com"
  },
  {
    "name": "Brooke",
    "age": 24,
    "email": "Brookemalin@gmail.com"
  },
  {
    "name": "Hudson",
    "age": 2,
    "email": "Hudsonmalin@gmail.com"
  },
  {
    "name": "Blakelee",
    "age": 1,
    "email": "Blakeleemalin@gmail.com"
  }
]

server.get("/api/users", (req, res) => {
  res.json(users)
})

server.use(express.json())

module.exports = server