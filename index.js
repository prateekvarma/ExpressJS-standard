import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// this looks for a filder named public, and will serve any static file in public folder on the root url. Eg: localhost:3000/image.jpg
app.use(express.static('public'));

// this will serve static content on the images folder, with the url with images appended to it. Eg: localhost:3000/images/image.jog
app.use('/images', express.static('images'));

app.get('/', (req, res) => 
    res.json(data)
);

app.post('/newItem', (req, res) => 
    res.send(`a post response with /newItem route at port ${PORT}`)
);

app.put('/item', (req, res) => 
    res.send(`a put response with /item route at port ${PORT}`)
);

app.delete('/item', (req, res) => 
    res.send(`a delete response with /item route at port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
    console.log(data);
});
