// // if you want to run this take this file outside the folder and run it so it can locate the ejs file


    const express = require('express');
    const app = express();
    const path = require('path') 
    // Middleware to parse JSON and URL-encoded data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname , 'public')));
    app.set('view engine','ejs');

    // Define a simple GET route
    app.get('/', function (req, res) {
        res.render('index');
    });

    // Start the server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
// console.log(path.join(__dirname + '/public')); it shows the current directory name