const express = require('express');
const parser = require('body-parser');
const app = express();
const axios = require('axios');
app.use(parser.json());

app.get('/home', async (req, res) => {
    try {
        const options = { json : true };
        const response = await app.get('https://content.guardianapis.com/search?api-key=9d5efabe-e51a-4992-a3ff-b9d60fb967c0', options);
        res.json(response);
    }
    catch (e) { res.status(200).end(e.message); }
});

app.get('/articles/:id', (req, res) => {

})

app.listen(7004);

//Guardian API Key
//9d5efabe-e51a-4992-a3ff-b9d60fb967c0
//'https://content.guardianapis.com/search?api-key=9d5efabe-e51a-4992-a3ff-b9d60fb967c0'