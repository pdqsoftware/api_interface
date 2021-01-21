const path = require('path')

module.exports = {
   entry: './src/app.js',                         //   Source file name
   output: {
       path: path.join(__dirname, 'public'),      //  Absolute path name required for public directory
       filename: 'bundle.js'                      //   Destination bundle name - must be added to index.html file
   },
   module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    mode: "development",
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8082
    }
}
