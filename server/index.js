const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;
const path = require('path');
const ENV = process.env.NODE_ENV;

const servedFolder = ENV === 'production' ? '../public' : '../dist';

app.use(express.static(path.join(__dirname, servedFolder)));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, servedFolder, 'index.html'));
});

app.listen(PORT, () => console.log(`🚀 ${ENV} Proxy Server ready at port ${PORT}`));
