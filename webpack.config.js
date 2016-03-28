var path = require('path');

module.exports = {
    entry:[
        path.resolve('front/step6/typescript/step6.correction')
    ],
    output:{
        path:path.resolve('target/js'),
        filename:'app.bundle.js'
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
                include: path.resolve('front/step6/typescript')

            }
        ]
    },
    resolve:{
        root:['front/step6/typescript'],
        extensions: ["", ".js", ".ts"]
    }
};