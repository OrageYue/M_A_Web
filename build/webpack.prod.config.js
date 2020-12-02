const {merge} = require('webpack-merge');
const baseWebpackConfig = require( './webpack.base.config' );
const utils = require( './utils' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = merge( baseWebpackConfig, {
    // 环境
    mode: "production",
    // 插件
    plugins: [
        new HtmlWebpackPlugin( {
            filename: utils.resolve( './../dist/index.html' ),
            template: "index.html",
            inject: true,
            minify: {
                removeAttributeQuotes: true,//移除标签属性引号
                removeComments: true,       //移除注释
                collapseWhitespace:true,    //折叠空格
            }
        })
    ]
})