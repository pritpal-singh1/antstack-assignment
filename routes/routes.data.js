"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var url_info_route_1 = __importDefault(require("../url-info/url-info.route"));
exports.routes = [
    {
        path: "/url-info",
        router: url_info_route_1.default,
    },
];
