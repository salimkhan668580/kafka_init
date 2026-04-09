"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producer_1 = __importDefault(require("./producer"));
const consumer_1 = require("./consumer");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
(0, consumer_1.consumerFun)();
app.use("/send", producer_1.default);
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Server working fine",
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
