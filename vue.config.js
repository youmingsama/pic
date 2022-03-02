module.exports = {
    devServer: {
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://hatsunemiku-tov.imwork.net',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}