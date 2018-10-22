const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    mode: 'production',
    output: {
        path: path.resolve('./dist'),
        filename: 'buddle.js'
    } 
}