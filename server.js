const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sajikan semua file dari folder 'public' secara statis.
// Express akan secara otomatis mencari file 'index.html' untuk root URL (/).
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server maintenance berjalan. di http://localhost:${PORT}`);
});