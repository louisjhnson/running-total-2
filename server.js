const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let total = 0;

app.use(express.json());

// Endpoint to get the current total
app.get('/total', (req, res) => {
    res.json({ total });
});

// Endpoint to add a number to the total
app.post('/add', (req, res) => {
    const { number } = req.body;
    total += number;
    res.json({ total });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
