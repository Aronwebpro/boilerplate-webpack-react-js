const path = require('path');
const webpack = require('webpack');


const config = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        //stats: 'errors-only',
        //overlay: true,
        open: true,
        hot: true,
        publicPath: '/public/',
        historyApiFallback: true
    },
    devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "eslint-loader"
                ]
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}

module.exports = config;