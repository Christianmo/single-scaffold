module.exports = {
    context: __dirname + "/assets/js",
    entry: './script.js',
    output: {
        path: __dirname + "/statics/js",
        filename: 'script.js'
    },
    devServer : {
        host: '0.0.0.0',
        port: '3000',
        inline: true
    },
}
