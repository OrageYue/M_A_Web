const utils = require( './utils' )
const path = require( 'path' );

module.exports = {
    // 打包入口
    entry: {
        app:['react-hot-loader/patch', './src/index']
    },
    // bundle出口
    output: {
        path: utils.resolve( '../dist' ),
        filename: "js/[name].[hash].js",
        publicPath:"/"
    },
    externals: {
  'AMap': 'AMap'
},
    // 模块
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader', // 创建 <style></style>
                    },
                    { 
                        loader: 'css-loader',  // 转换css
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                    loader: 'style-loader', 
                    },
                    {
                    loader: 'css-loader',
                    },
                    {
                    loader: 'less-loader', // 编译 Less -> CSS
                    },
                ],
            },
            {
                test: /\.pdf$/,
                loader: "file-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@': path.join(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
        }
    }
}