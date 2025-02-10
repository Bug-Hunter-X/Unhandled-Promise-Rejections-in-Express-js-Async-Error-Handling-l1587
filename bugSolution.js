const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... await database operation to fetch user data ...
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Server error');
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});