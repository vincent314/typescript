var path = require('path');

module.exports = {
    context: __dirname + '/front/step7',
    entry:[
        './Module/TestAppModule'
    ],
    output:{
        path:__dirname + '/front/step7',
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript',
                query: {
                    doTypeCheck: true,
                    resolveGlobs: false,
                    externals: ['typings/browser.d.ts']
                },
                include: path.resolve('front/step7')

            }
        ]
    },
    resolve:{
        root:['./'],
        extensions: ["", ".js", ".ts"]
    }
};