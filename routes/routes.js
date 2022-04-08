"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
var express_1 = require("express");
var routes_data_1 = require("./routes.data");
var registerMiddlewares = function (app) {
    app.use((0, express_1.json)());
    for (var _i = 0, routes_1 = routes_data_1.routes; _i < routes_1.length; _i++) {
        var route = routes_1[_i];
        app.use(route.path, route.router);
    }
    app.use(function (err, req, res, next) {
        res.status(err.statusCode || 500).send({ error: err });
    });
};
exports.registerMiddlewares = registerMiddlewares;
