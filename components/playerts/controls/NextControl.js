"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = require("./Control");
class NextControl extends Control_1.Control {
    constructor() {
        super();
    }
    onClick() {
        this.player.next();
    }
    get disabled() {
        return this.player.currentIndex === this.player.total - 1;
    }
}
exports.NextControl = NextControl;
//# sourceMappingURL=NextControl.js.map