const express = require('express');
const url = require('url');
const fs = require('fs');
const app = express();


const errData = fs.readFileSync('404.html', 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
});


app.get('/' , function (req,res) {
    fs.readFile('index.html', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.write(errData);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end()
        }
    })
})

app.get('/contact-me', function (req,res) {
    fs.readFile('./contact-me.html', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.write(errData);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end()
        }
    })
})

app.get('/about', function (req,res) {
    fs.readFile('./about.html', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.write(errData);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            res.end()
        }
    })
})


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
