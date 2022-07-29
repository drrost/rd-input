'use strict';

const rd_mul = (a, b) => {
    return a * b;
}

const rd_add = (a, b) => {
    return a + b;
}

// Use: const {rd_add, rd_mul} = require('rd-package');
module.exports = { rd_add, rd_mul }
