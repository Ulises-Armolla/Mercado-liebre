let express = require('express');
let app = express();
let path = require('path');
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, function (req, res) {
    console.log(`Servidor funcionando en el puerto ${PORT} http://localhost:${PORT}`);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});