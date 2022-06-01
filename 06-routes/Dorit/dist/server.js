"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4006;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const usersRout_1 = __importDefault(require("./route/usersRout"));
app.use("/api/users", usersRout_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
