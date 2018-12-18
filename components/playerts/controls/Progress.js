"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../Player");
class Progress {
    constructor() {
        this._age = 0;
        this._position = 0;
        this._total = 0;
        Player_1.Player.instance.on(Player_1.Player.onFrameRendered, (data) => this.update(data));
    }
    update(data) {
        if (!this._total) {
            this._total = data.total;
        }
        const current = data.index;
        this._age = current + 1;
        this._position = current / (this._total - 1) * 100;
    }
    get age() {
        return this._age;
    }
    get position() {
        return this._position;
    }
    get total() {
        return this._total;
    }
}
exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map