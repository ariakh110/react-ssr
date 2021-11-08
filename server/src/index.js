import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";
import Html from './Html';

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = renderToString(<Html content={content} />);
  res.send(html);
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
