module.exports = {
    baseUrl: "/", // 根域上下文目录
    outputDir: "dist/" + process.env.VUE_APP_CURRENTMODE, // 构建输出目录
    assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
    css: {
        loaderOptions: {
            postcss: {
                plugins: () => [
                    require("postcss-px2rem")({
                        remUnit: 75
                        // baseDpr:2
                    })
                ]
            }
        }
    },
    configureWebpack: {
        plugins: [],
        output: {
            publicPath: "./" // 项目部署到线上资源相对路径
        }
    },
    pages: {
        index: {
            // entry for the page
            entry: "src/views/index/main.js",
            // the source template
            template: "public/index.html",
            // output as dist/index.html
            filename: "index.html",
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: "index",
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        demo: {
            entry: "src/views/demo/main.js",
            template: "public/index.html",
            filename: "demo.html",
            title: "demo",
            chunks: ["chunk-vendors", "chunk-common", "demo"]
        }
    }
};
