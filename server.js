//Install express server
const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/app-angular-heroku'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + '/dist/app-angular-heroku/index.html'))
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);