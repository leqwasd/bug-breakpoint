/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
    entry: "./src/server.ts",
    mode: "development",
    target: "node",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "server.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    externals: [
        nodeExternals({})
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"]
            },
            {
                test: /\.tsx?$/,
                use: ["ts-loader"]
            }
        ]
    },
    devtool: "source-map"
};
module.exports = config;
