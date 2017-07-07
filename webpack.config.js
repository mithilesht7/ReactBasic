var path = require('path');
var webpack = require('webpack');
module.exports = {
 entry: './main.js',
  output: { 
   path: '/',
   filename: 'index.js'
 },
  module: {
    loaders: [
     {
       test: /.js?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react']
         }
     },
     {
       test: /\.css$/, 
       loader: "style-loader!css-loader" 
     },
     { 
        test: /\.(jpg)$/,
        loader: 'file-loader' 
     },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
         loader: 'url-loader?limit=100000' 
         },   
        {
       test: /\.json$/,
       exclude: /node_modules/,
       loader: "json-loader" 
     },  
   ]
  },
devServer : {
port : 8080,
    historyApiFallback: true
}
};