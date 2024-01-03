const express = require('express')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const movies = require('./public/jsons/movies.json').results
    // console.log('movies',movies)
const BASE_IMG_URL = 'https://movie-list.alphacamp.io/posters/'


app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'))

app.get('/', (req, res) => {
    //   res.send('express app for movies')
    res.redirect('/movies')
})

app.get('/movies', (req, res) => {
    res.render('index', { movies, BASE_IMG_URL })
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