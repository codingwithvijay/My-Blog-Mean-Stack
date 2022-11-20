const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/database')
const path = require('path')


mongoose.Promise = global.Promise;

mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log("error connecting db ", err)
    } else {
        console.log("secret ", config.secret)
        console.log("connection successful : ", config.db)
    }
});

app.use(express.static(__dirname + '/blog-client/dist/blog-client'))

console.log(__dirname)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/blog-client/dist/blog-client/index.html'))
})

app.listen(8080, () => {
    console.log("listening to port 8080")
})