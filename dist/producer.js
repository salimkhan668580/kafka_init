"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const kafkaConfig_1 = require("./kafkaConfig");
const ProducerRouter = express_1.default.Router();
ProducerRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield kafkaConfig_1.producer.connect();
    yield kafkaConfig_1.producer.send({
        topic: 'login-notification',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ],
    });
    res.json({
        status: "OK",
        message: "Message sent to Kafka topic successfully"
    });
}));
exports.default = ProducerRouter;
