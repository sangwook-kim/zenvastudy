const path = require('path');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'game.js'
    },
    module: {
        rules: [
            {test: /\.ts$/, use: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    mode: 'development'
};

module.exports = config;
