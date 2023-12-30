const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //   res.send('express app for movies')
    res.redirect('/movies')
})

app.get('/movies', (req, res) => {
    res.send('Listening movies')
})
app.get('/movies/:id', (req, res) => {
    const params = req.params
    const id = req.params.id
    console.log('params',params)
    console.log('params.id',params.id)
    res.send(`read movie:${id}, params:${params}`)
})
app.listen(port, () => {
      console.log(`express server is running on http://localhost:${port}`)
})