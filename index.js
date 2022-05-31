import express from "express";

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    console.log(req.query)
    console.log(req.query.test);
    res.status(200).json('server working')
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))