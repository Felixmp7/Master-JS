'use strict'

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
    .then((response) => {
        console.log('Ha cargado al DB');
    })
    .catch((error) => console.log(error))