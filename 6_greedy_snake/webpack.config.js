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
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 
                // 需要同时下载less, less-loader, 但是此处只能引入less-loader, 不能引入less哦
                'less-loader']
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

    devServer: {
    //     port: 3000,
        host: 'localhost',
        open: true
    }
}