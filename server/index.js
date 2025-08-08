const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());

// routes
app.get('/allWords', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM words')
        res.status(200).send(data.rows)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/newWord', async (req, res) => {
    const { word, hiragana } = req.body;
    try {
        await pool.query('INSERT INTO words (word, hiragana) VALUES ($1, $2)', [word, hiragana])
        res.status(200).send({ message: "Successfully added child" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    // const result = await pool.query('SELECT * FROM words WHERE word = $1', [word]);
    // res.json(result.rows);
});

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE words( id SERIAL PRIMARY KEY, word VARCHAR(100), hiragana VARCHAR(100))')
        res.status(200).send({ message: "Successfully added table" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Japanese Conjugator App available on http://localhost:${PORT}`));
