const express = require('express')
const app = express()

const getRandomInt = () => {
  const max = 1000000000;
  return Math.floor(Math.random() * max);
}

const dumbSort = () => {
  let arrayLength = process.env.ARRAY_LENGTH || 10000000
  let arr = Array.from({ length: arrayLength }, () => getRandomInt())
  arr.sort()

  return arr.length
}

app.get('/binus', function (req, res) {
  console.log(`${new Date()} traffic`)

  res.send(
    {
      length: dumbSort(),
      date: new Date()
    }
  )
})

const port = process.env.PORT || 8080
app.listen(port)
