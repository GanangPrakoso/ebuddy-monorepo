"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = (0, express_1.Router)();
router.get("/fetch-user-data", controllers_1.default.getUsers);
router.post("/create-user-data", controllers_1.default.createUser);
router.put("/update-user-data/:id", controllers_1.default.updateUser);
exports.default = router;
