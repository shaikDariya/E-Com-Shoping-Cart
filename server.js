const express = require('express');
const app = express();
const port = 5000;

const itemsData = require('./json/all.json');
const categoriesList = require('./json/categories.json');
app.get('/categories', (req, res, next) => {
    res.json(categoriesList);
});

app.get('/items', (req, res, next) => {
    res.json(itemsData);
});

app.get('/items/:id', (req, res, next) => {
    const { params:{ id }} = req;
    const queryItem = itemsData.data.filter((i) => i.id === id);
    res.json(queryItem);
});

app.listen(port, () => console.log(`Backend server is listening on port ${port}`));