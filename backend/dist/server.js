"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const superhero_router_1 = __importDefault(require("./routers/superhero.router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
app.use(superhero_router_1.default);
app.all("*", (_request, response) => {
    response.status(404).json({ error: "Route not found!" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
