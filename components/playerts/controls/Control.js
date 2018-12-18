"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../Player");
class Control {
    get player() {
        return Player_1.Player.instance;
    }
    onClick(params) {
        throw new Error("Method must be implemented in child class.");
    }
    get disabled() {
        return false;
    }
}
exports.Control = Control;
//# sourceMappingURL=Control.js.map