"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const Tile_1 = require("./Tile");
const DataService_1 = require("../DataService");
class AntTile extends Tile_1.Tile {
    constructor(params) {
        super(params);
    }
    render() {
        if (this.units.a === 0 && this.units.e !== 1 && this.units.e !== 10) {
            return null;
        }
        let key = DataService_1.DataService.getClientResourceKey("ant@2x.png", this.units.a);
        if (this.units.e === 1) {
            key = DataService_1.DataService.getClientResourceKey("birth@2x.png");
        }
        if (this.units.e === 10) {
            key = DataService_1.DataService.getClientResourceKey("death@2x.png");
        }
        const resource = PIXI.loader.resources[key];
        const sprite = new PIXI.Sprite(resource.texture);
        if (this.units.e === 1 || this.units.e === 10) {
            sprite.width = this.size.w;
            sprite.height = this.size.h;
            sprite.position.set(this.position.x, this.position.y);
        }
        else {
            const originalRatio = resource.data.width / resource.data.height;
            sprite.width = this.size.w * 1.2;
            sprite.height = Math.floor(sprite.width / originalRatio);
            sprite.position.set(Math.round(this.position.x - (sprite.width - this.size.w) / 2), Math.round(this.position.y - (sprite.height - this.size.h) / 2));
        }
        return sprite;
    }
}
exports.AntTile = AntTile;
//# sourceMappingURL=AntTile.js.map