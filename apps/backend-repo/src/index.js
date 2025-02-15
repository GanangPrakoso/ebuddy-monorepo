"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authentication_1 = __importDefault(require("./middlewares/authentication"));
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config();
}
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3001;
// CORS Configuration
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        callback(null, origin || "*");
    },
    credentials: true,
}));
// Middleware setup
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(authentication_1.default);
// Routes
app.use("/", userRoutes_1.default);
// Start server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
exports.default = app;
