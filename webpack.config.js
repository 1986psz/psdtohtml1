var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname+"/src/js/entry.js",
    output: {
        path: __dirname+'/public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                "style",
                "css!sass")
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