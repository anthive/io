"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const enums_1 = require("./enums");
const TilesFactory_1 = require("./tiles/TilesFactory");
class Stage extends PIXI.Container {
    constructor(_frame, _skins) {
        super();
        this._frame = _frame;
        this._skins = _skins;
        this._tilesFactory = new TilesFactory_1.TilesFactory();
        this.init();
    }
    init() {
        this.loop([enums_1.TileType.Map]);
        this.loop([enums_1.TileType.Ant, enums_1.TileType.Food]);
        this.visible = false;
    }
    loop(tileTypes) {
        let rowIndex = -1;
        for (let row of this._frame) {
            rowIndex++;
            let tileIndex = -1;
            for (let cell of row) {
                tileIndex++;
                if (cell === 0) {
                    continue;
                }
                const tileParams = {
                    value: cell,
                    x: tileIndex,
                    y: rowIndex
                };
                for (let type of tileTypes) {
                    const tile = this._tilesFactory.createTile(tileParams, type);
                    this.addChild(tile.render());
                }
            }
        }
    }
    addChild(child) {
        if (child) {
            return super.addChild(child);
        }
    }
    toDebug(size, username) {
        const cells = new Array(size.height);
        this._frame.forEach((row, y) => {
            cells[y] = new Array(size.width);
            row.forEach((value, x) => {
                cells[y][x] = {};
                const tileParams = { value, x, y };
                const tile = this._tilesFactory.createTile(tileParams, enums_1.TileType.Map);
                if (tile.units.f > 0) {
                    cells[y][x].food = tile.units.f;
                }
                if (tile.units.m > 0 && tile.units.m < 9) {
                    cells[y][x].hive = this._skins[tile.units.m];
                }
                if (tile.units.a > 0) {
                    cells[y][x].ant = this._skins[tile.units.a];
                }
            });
        });
        const payload = {
            id: username,
            ants: [],
            map: { width: size.width, height: size.height, cells }
        };
        console.log(payload);
        return payload;
    }
}
exports.Stage = Stage;
//# sourceMappingURL=Stage.js.map