const express = require('express');
const app = express();
const authApp = require('./authRoutes');




app.use(authApp);

app.listen(3088, () => {
    console.log('Exchangagram Live!')
})