const path = require('path');

module.exports = {
    entry: './src/ui/SimpleTestClient.ts',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.worker\.ts$/,
                loader: "worker-loader",
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use:  [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false
    },
    devServer: {
        index: "index.html",
        contentBase : path.join(__dirname),
        publicPath: '/',
        compress: true,
        port: 9000,
        hot: true
    }
};