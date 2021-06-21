const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    // import能够引入哪些模块呢？
    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
}