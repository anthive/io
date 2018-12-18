"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = require("./Control");
class PrevControl extends Control_1.Control {
    constructor() {
        super();
    }
    onClick() {
        this.player.prev();
    }
    get disabled() {
        return this.player.currentIndex === 0;
    }
}
exports.PrevControl = PrevControl;
//# sourceMappingURL=PrevControl.js.map