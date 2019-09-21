const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    entry : {
        index:"./src/index.js"
    },
    output:{
        path : path.join(__dirname,"dist"),
        filename : "[name]_[chunkhash:8].js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    mode: 'development',
    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name]_[contenthash:8].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            chunks:["index"]
        }),
    ]
        
}