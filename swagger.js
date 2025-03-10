const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Usuários",
            version: "1.0.0",
            description: "Documentação da API de Usuários usando Swagger",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./routes.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
