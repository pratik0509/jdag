import express from "express";
import path from "path";
import logger from "morgan";
import multer from "multer";
import bodyParser from "body-parser";

import routes from "./controllers";

export default async function (app) {
    app.set("views", path.join(__dirname, "/views"));
    app.set("view engine", "pug");

    app.use(bodyParser.json());
    app.use(logger("dev"));
    app.use(express.static(path.join(__dirname, '/../public')));
    app.use('/', routes);

    app.use(function(req, res, next) {
        var err = new Error("Page Not Found!");
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}