import express from 'express';

const app = express();

const PORT = 3005;
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const person = { name: 'Donald Duck', occupation: 'plumber' }
    res.render('home', {person});
});

app.get('/friends', (req, res) => {
    const friends = ["Mickey","Goofy","Minnie","Daisygit"];
    res.render('home', {friends});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
