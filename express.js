const express = require('express');
const app2 = express();

app2.get('',(req, res) => {
    res.send(`
    <h2>hello, this is about page</h2>
    <a href="/about">about Page</a>`);
})
app2.get('/about',(req, res) => {
    res.send(`
    <input type="text" placeholder="enter your name" value="${req.query.name}"/>
    <button>submit</button>
    <a href="/">home Page</a>`);
});
app2.get('/help',(req, res) => {
    res.send('hello, this is help page');
})


app2.listen(4200);