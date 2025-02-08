"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const superhero_controller_1 = require("../controllers/superhero.controller");
const router = express_1.default.Router();
router.get("/superheroes", superhero_controller_1.getAllSuperheroes);
router.post("/superheroes", superhero_controller_1.addSuperhero);
exports.default = router;
