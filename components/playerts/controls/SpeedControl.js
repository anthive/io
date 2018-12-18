"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = require("./Control");
class SpeedControl extends Control_1.Control {
    constructor() {
        super();
    }
    onClick(speed) {
        if (speed === this.player.speed) {
            return;
        }
        this.player.speed = speed;
    }
}
exports.SpeedControl = SpeedControl;
//# sourceMappingURL=SpeedControl.js.map