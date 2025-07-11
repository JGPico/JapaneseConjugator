const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

// routes
app.get('/', async (req, res) => {
    res.sendStatus(200);
});

app.post('/', async (req, res) => {
    const { name, location } = req.body;
    res.status(200).json({
        message: `YOUR KEYS WERE ${name} and ${location}`,
    })
    // const result = await pool.query('SELECT * FROM words WHERE word = $1', [word]);
    // res.json(result.rows);
});

app.get('/setup', async (req, res) => {
    try {
        //await pool.query('CREATE TABLE words( id SERIAL PRIMARY KEY, word VARCHAR(255) NOT NULL)')
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Japanese Conjugator App available on http://localhost:${PORT}`));
