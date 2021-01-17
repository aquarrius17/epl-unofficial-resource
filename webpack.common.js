const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
		match: "./src/match.js",
		matchDetail: "./src/matchDetail.js"
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new WebpackPwaManifest({
			name: "English Premier League - unOfficial",
			short_name: "EPL",
			start_url: "./index.html",
			description: "EPL UNOFFICIAL",
			background_color: "#9c27b0",
			theme_color: "#ab47bc",
			crossorigin: "use-credentials",
			gcm_sender_id: "830977284673",
			icons: [
				{
					src: path.resolve("./src/images/icon.png"),
					sizes: [96, 128, 192, 256, 384, 512],
					destination: path.join("images/icons", "ios"),
					ios: true
				},
				{
					src: path.resolve("./src/images/icon.png"),
					size: "1024x1024",
					destination: path.join("images/icons", "maskable"),
					purpose: "maskable"
				}
			]
		}),
		new WorkboxWebpackPlugin.InjectManifest({
			swSrc: "./src/service-worker.js",
			swDest: "service-worker.js",
			exclude: [
				/\.png$/,
				/\.webp$/
			]
		}),
		new CopyPlugin({
			patterns: [
				{from: "./src/match.html", to: ""},
				{from: "./src/matchDetail.html", to: ""},
				{from: "./src/nav.html", to: ""},
				{from: "./src/css", to: "css"},
				{from: "./src/images", to: "images"},
				{from: "./src/js", to: "js"},
				{from: "./src/pages", to: "pages"}
			]
		})
	]
};
