const express = require("express");
const app = express();

const port = "3001";

app.use(require("./logger"));

app.get("/", (req, res) => {
    res.json({
        message: "Hello,world"
    });
});

app.get('/:user', (req, res) => {
    res.json({
        message: `Hello, ${req.query.name}`
    });
})

app.listen(port);

console.log(`listen on ${port}`);
