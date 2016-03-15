var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: __dirname+"/src/js/entry.js",
    output: {
        path: __dirname+'/public',
        filename: "bundle.js"
        //publicPath: __dirname+'/public'
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                "style",
                "css?minimize!sass?includePaths[]="+ path.resolve(__dirname, "./node_modules/compass-mixins/lib")
              )
            },/*
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=../images/img-[hash:6].[ext]"
            }*/
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader' 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/public-css.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ] 
};