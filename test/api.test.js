const request = require("supertest");
const express = require("express");
const routes = require("../routes");

const app = express();
app.use(express.json());
app.use(routes);

describe("Testes da API de Usuários", () => {
    let token = "";

    it("Deve retornar um token ao fazer login", async () => {
        const res = await request(app)
            .post("/login")
            .send({ email: "admin@email.com", password: "123456" });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("token");
        token = res.body.token;
    });

    it("Deve retornar erro ao tentar acessar /users sem token", async () => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toEqual(403);
    });

    it("Deve acessar /users com um token válido", async () => {
        const res = await request(app)
            .get("/users")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
