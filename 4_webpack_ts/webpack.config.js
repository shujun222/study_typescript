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
    }
}