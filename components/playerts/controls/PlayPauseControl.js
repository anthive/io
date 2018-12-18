"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = require("./Control");
class PlayPauseControl extends Control_1.Control {
    constructor() {
        super();
    }
    onClick() {
        if (this.player.isPlaying) {
            this.player.pause();
        }
        else {
            this.player.play();
        }
    }
}
exports.PlayPauseControl = PlayPauseControl;
//# sourceMappingURL=PlayPauseControl.js.map