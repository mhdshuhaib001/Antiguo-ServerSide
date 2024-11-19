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
const app_1 = require("./infrastructure/config/app");
const DBconfig_1 = require("./infrastructure/config/DBconfig");
const dotenv_1 = __importDefault(require("dotenv"));
const socket_io_1 = require("./infrastructure/config/services/socket-io");
dotenv_1.default.config();
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, DBconfig_1.DBconfig)();
        const port = process.env.PORT || 8001;
        const url = `http://localhost:${port}`;
        const { app, server } = (0, app_1.createServer)();
        // initSocket(server)
        // Initialize Socket.io
        (0, socket_io_1.socketIoInit)(server);
        // Auction Notifgication corn 
        // startAuctionCronJob()
        // initAuctionCronJob();
        server.listen(port, () => console.log(`Server running at ${url}`));
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
});
startServer();