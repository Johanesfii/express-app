import express from "express";
 

const app = express();
 

app.get('/', (req, res) => {
    res.send('<h3>Home</h3>');
});
 
app.get('/about', (req, res) => {
    res.send('<h3>About</h3>');
});

app.get('/users', (req, res) => {
    res.send('<h3>Get User</h3>');
});

app.post('/users', (req, res) => {
    res.send('<h3>Post User</h3>');
});

app.put('/users/:id', (req, res) => {
    const id = req.params
    res.send(id);
});

app.delete('/users/userId', (req, res) => {
    res.send(req.params.userId);
}); 
 

// app.get('/about', (req, res) => {
//     res.send('Welcome to About Page');
// });

// app.get('/contact', (req, res) => {
//     res.send('Welcome to Contact Page');
// });

app.listen(3000, () => console.log('Server is okay'));