const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
console.log('Server is starting...');
console
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/add',(req,res) =>{
    const {num1, num2} = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input. Please provide two numbers.');
    }
    
    res.json({sum: num1 + num2});
});

app.post('/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.send('Data received successfully!');
});

if(process.env.NODE_ENV !== 'test') {
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
}