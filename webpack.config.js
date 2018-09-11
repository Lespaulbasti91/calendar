const path = require('path');

module.exports = {

    entry: "./src/js/index.js",

    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "public"), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "bundle.js", // string    // the filename template for entry chunks
        publicPath: "./src/assets/", // string    // the url to the output directory resolved relative to the HTML page
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    }
};