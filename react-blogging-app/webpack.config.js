var path = require('path'),
webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './js/app' // Your app's entry point
],
    output: {
        filename: "js/bundle.js"
    },
    plugin: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // example of polyfilling with webpack
        // alternatively, just include the babel runtime option below
        // and get Promises, Generators, Map, and much more!
        // You can even get forward looking proposed features
        // for ES7 and beyond with the
        // stage query parameter below
        // https://babeljs.io/docs/usage/experimental/
        // welcome to the future of JavaScript! :)
        //new webpack.ProvidePlugin({
        // 'arrayutils': 'imports?this=>global!exports?global.arrayutils!arrayutils'
        //})
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.less'],
        alias: {
            // convenient anchor point for nested modules
            'appRoot': path.join(__dirname, 'js'),
            'vendor': 'appRoot/vendor'
        }            
    },
    module: {
        loaders: [
        {
            test: /\.less$/,
            loader: 'style-loader!cssloader!autoprefixer?browsers=last 2 version!less-loader'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(png|jpg)$/,
            // inline base64 URLs for <=8k images,
            // use direct URLs for the rest
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.jsx?$/,
            include: [
                // files to apply this loader to
                path.join(__dirname, 'js')
            ],
            // loaders process from right to left
            loaders: [
                'react-hot',
                'babel?presets[]=react,presets[]=es2015',
                'reflux-wrap-loader'
            ]
        }
            ]
    }// end moduleS
} 

module.exports = function (source) {
this.cacheable && this.cacheable();
var newSource;
if (/reflux-core.*index.js$/.test(this.resourcePath)) {
newSource = ";import RefluxPromise from 'reflux-promise';\n";
newSource += source;
newSource += ";\nReflux.use(RefluxPromise(Promise));";
}
return newSource || source;
};