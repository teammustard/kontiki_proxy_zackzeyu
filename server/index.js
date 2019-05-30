const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => console.log(`🚀 Proxy Server ready at port ${PORT}`));
