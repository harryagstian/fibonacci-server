const express = require('express')
const app = express()

const getRandomInt = () => {
  const max = 1000000000;
  return Math.floor(Math.random() * max);
}

const generateArray = () => {
  let arrayLength = process.env.ARRAY_LENGTH || 10000000
  let arr = Array.from({ length: arrayLength }, () => getRandomInt())

  return arr
}

app.get('/test-endpoint', function (req, res) {
  console.log(`${new Date()} Generating array`)

  res.send(
    {
      data: generateArray(),
      date: new Date()
    }
  )
})

const port = process.env.PORT || 8080
app.listen(port)
