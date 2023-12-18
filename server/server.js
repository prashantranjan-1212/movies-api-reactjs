import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/App";

const PORT = "8000";
const app = express();

// app.use("^/$", (req, res, next) => {
// 	fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return res.sendStatus(500).send("Bad Things Happened");
// 		}

// 		res.send(
// 			data.replace(
// 				'<div id="root"></div>',
// 				`<div id="root">${ReactDOMServer.renderToPipeableStream(
// 					<App />
// 				)}</div>`
// 			)
// 		);
// 	});
// });

//app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/*", (req, res) => {
	const entryPoint = ["/main.js"];

	const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
		<StaticRouter location={req.url}>
			<App />
		</StaticRouter>,
		{
			bootstrapScripts: ["client.bundle.js"],
			onShellReady() {
				res.statusCode = 200;
				res.setHeader("Content-type", "text/html");
				pipe(res);
			},
			onShellError() {
				res.statusCode = 500;
				res.send("<!doctype html><p>Loading...</p>");
			},
		}
	);
});

app.listen(PORT, () => {
	console.log(`App launched on ${PORT}`);
});
