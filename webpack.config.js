const path = require('path')
const HTMLWebackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js',
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:[
                    {
                        loader:"babel-loader",
                    },
                    'ts-loader'
                ],
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        //处理css兼容问题，配合package.json中browserslist来制定兼容性
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                    {
                                        browsers:'last 2 versions'
                                    }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebackPlugin({
            template:"./src/index.html"
        })
    ],
    resolve:{
        extensions:[".ts",".js"]
    },
    mode:'production'
}