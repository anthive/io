"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = require("./Control");
class DebugControl extends Control_1.Control {
    constructor() {
        super();
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.player.stage.toDebug(this.player.size, this.player.currentUser.username);
    }
    get disabled() {
        const currentUser = this.player.currentUser || {};
        const hasCurrentUser = this.player.players.some((player) => {
            return player.username === currentUser.username;
        });
        return this.player.isPlaying || !hasCurrentUser;
    }
}
exports.DebugControl = DebugControl;
//# sourceMappingURL=DebugControl.js.map