// requires needed modules
let express = require('express')

//initilizes app object
let app = express()

// creates homepage route
app.get('/', (req , res) => {
    res.send('<span style = "color: blue;">Hello World</span>')
})

//creates a second route
app.get('/second', (req, res)=>{
    res.send('My second page!')
})

// listens for connections
app.listen(3000, ()=>{
    console.log('I am awake')
})
