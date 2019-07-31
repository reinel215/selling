module.exports = {
    entry : ['babel-polyfill','./react_app/IndexReact.js'],
    output: {
        path: __dirname+'/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use :'babel-loader',
                test: /\.js$/,
                exclude : /node_modules/
            },
            {
                use:'file-loader',
                test:/\.jpg/,
                exclude:/node_modules/
            }
    
        ]
    }

}