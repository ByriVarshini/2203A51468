import express from 'express';
import { fetchNumbersFromServer } from './fetchnums.js';
import { updateWindow } from './store.js';

const app = express();
const PORT = 9876;

const validIds = ['p', 'f', 'e', 'r'];

app.get('/numbers/:id', async (req, res) => {
  const id = req.params.id;

  if (!validIds.includes(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  const fetchedNumbers = await fetchNumbersFromServer(id);
  const response = updateWindow(fetchedNumbers);

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
