"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
(async () => {
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [resolvers_1.UserResolver],
            validate: false,
        }),
    });
    apolloServer.applyMiddleware({ app });
    app.get("/", (_, res) => {
        res.send("Hello !");
    });
    app.listen(8000, () => {
        console.log("🚀 Server runing at http://127.0.0.1:8000");
    });
})();
//# sourceMappingURL=index.js.map