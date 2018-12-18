"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("../Config");
class Tile {
    constructor(_params) {
        this._params = _params;
        this.size = null;
        this.position = null;
        this.units = null;
        this.units = {
            e: Math.floor(this._params.value / 1000),
            m: Math.floor(this._params.value % 1000 / 100),
            f: Math.floor(this._params.value % 100 / 10),
            a: Math.floor(this._params.value % 10)
        };
        this.size = {
            w: Config_1.Config.size.width,
            h: Config_1.Config.size.height
        };
        this.position = {
            x: this._params.x * this.size.w,
            y: this._params.y * this.size.h
        };
    }
    render() {
        throw new Error("Method must be implemented in child class.");
    }
}
exports.Tile = Tile;
//# sourceMappingURL=Tile.js.map