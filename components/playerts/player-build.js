var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("interfaces/IControl", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("enums/ClientEvents", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientEvents;
    (function (ClientEvents) {
        ClientEvents[ClientEvents["noaction@2x.png"] = 2] = "noaction@2x.png";
        ClientEvents[ClientEvents["slow@2x.png"] = 3] = "slow@2x.png";
        ClientEvents[ClientEvents["badmove@2x.png"] = 4] = "badmove@2x.png";
        ClientEvents[ClientEvents["badload@2x.png"] = 5] = "badload@2x.png";
        ClientEvents[ClientEvents["badunload@2x.png"] = 6] = "badunload@2x.png";
        ClientEvents[ClientEvents["badeat@2x.png"] = 7] = "badeat@2x.png";
        ClientEvents[ClientEvents["collision@2x.png"] = 8] = "collision@2x.png";
        ClientEvents[ClientEvents["error@2x.png"] = 9] = "error@2x.png";
    })(ClientEvents = exports.ClientEvents || (exports.ClientEvents = {}));
});
define("enums/ControlType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlType;
    (function (ControlType) {
        ControlType[ControlType["PlayPause"] = 0] = "PlayPause";
        ControlType[ControlType["Prev"] = 1] = "Prev";
        ControlType[ControlType["Next"] = 2] = "Next";
        ControlType[ControlType["Speed"] = 3] = "Speed";
        ControlType[ControlType["Debug"] = 4] = "Debug";
    })(ControlType = exports.ControlType || (exports.ControlType = {}));
});
define("enums/TileType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TileType;
    (function (TileType) {
        TileType[TileType["Map"] = 0] = "Map";
        TileType[TileType["Food"] = 1] = "Food";
        TileType[TileType["Ant"] = 2] = "Ant";
    })(TileType = exports.TileType || (exports.TileType = {}));
});
define("enums/index", ["require", "exports", "enums/ClientEvents", "enums/ControlType", "enums/TileType"], function (require, exports, ClientEvents_1, ControlType_1, TileType_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(ClientEvents_1);
    __export(ControlType_1);
    __export(TileType_1);
});
define("controls/Control", ["require", "exports", "Player"], function (require, exports, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("interfaces/IControlsFactory", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/IFrame", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/IDataV2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/IMap", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/IPayload", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/IPlayer", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/ISkins", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/ITile", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/ITileParams", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Config", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Config = {
        play: true,
        speed: 4,
        speedList: [1, 2, 4],
        interval: 500,
        size: {
            width: 20,
            height: 20
        },
        colors: {
            black: 0x000000,
            green: 0x008000,
            brown: 0xa52a2a,
        },
        resourcesURL: "https://anthive.io/skins",
        flagsURL: "https://anthive.io/skins/lang/"
    };
});
define("tiles/Tile", ["require", "exports", "Config"], function (require, exports, Config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("interfaces/ITilesFactory", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("interfaces/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("DataService", ["require", "exports", "pixi.js", "request-promise-native", "jszip", "lodash", "enums/index", "Config"], function (require, exports, PIXI, request, JSZip, lodash_1, enums_1, Config_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataService {
        constructor(_data) {
            this._data = _data;
        }
        static getClientResourceKey(img, skin = 1) {
            return `${Config_2.Config.resourcesURL}/client/${skin}/${img}`;
        }
        static getServerResourceKey(img, theme = 1) {
            return `${Config_2.Config.resourcesURL}/server/${theme}/${img}`;
        }
        loadAll() {
            return this.loadData()
                .then((data) => this.loadImages());
        }
        loadImages(skin = 1) {
            let serverImages = ["background.png", "fog@2x.png", "foodsmall@2x.png", "foodmid@2x.png", "foodbig@2x.png"];
            const events = ["birth@2x.png", "death@2x.png", ...Array(8).fill(2).map((n, i) => enums_1.ClientEvents[n + i])];
            let clientImages = ["ant@2x.png", "hive@2x.png", ...events].map((img) => {
                if (!img.startsWith("ant") && !img.startsWith("hive")) {
                    return DataService.getClientResourceKey(img, skin);
                }
                const urls = [];
                for (let i = 1; i <= 2; i++) {
                    urls.push(DataService.getClientResourceKey(img, i));
                }
                return urls;
            });
            serverImages = serverImages.map((img) => DataService.getServerResourceKey(img));
            return new Promise((resolve) => {
                PIXI.loader
                    .add([lodash_1.flatten(clientImages), ...serverImages])
                    .load(resolve);
            });
        }
        loadData() {
            try {
                const url = new URL(this._data);
                if (url.href.endsWith(".zip")) {
                    return request({
                        url: url.href,
                        encoding: null
                    }).then(data => this.unzip(data, url.pathname));
                }
                return request(url.href).then(data => this.parseData(data));
            }
            catch (e) {
                return Promise.resolve(this.parseData());
            }
        }
        parseData(data = this._data) {
            let parsedData;
            try {
                parsedData = JSON.parse(data);
            }
            catch (e) {
                parsedData = data;
            }
            console.log(parsedData);
            this._map = parsedData.version === "2.3" ? this.parseDiff(parsedData) : parsedData.Map;
            this._players = parsedData.players;
            return parsedData;
        }
        parseDiff(data) {
            let lastFrame = JSON.parse(JSON.stringify(data.canvas));
            let map = [];
            map.push(lastFrame);
            for (const frameDiff of data.frames) {
                for (const tileDiff of frameDiff) {
                    const x = tileDiff.l % 100;
                    const y = Math.floor(tileDiff.l / 100);
                    lastFrame[y][x] = tileDiff.v;
                }
                map.push(lastFrame);
                lastFrame = JSON.parse(JSON.stringify(lastFrame));
            }
            return map;
        }
        unzip(data, pathname) {
            const fileName = pathname.split("/").pop().replace(".zip", ".json");
            return JSZip.loadAsync(data)
                .then(zip => zip.file(fileName).async("string"))
                .then((result) => {
                return this.parseData(result);
            });
        }
        get map() {
            return this._map ? this._map.slice(0, 1500) : [];
        }
        get count() {
            return this._map ? { tiles: this._map[0][0].length, rows: this._map[0].length } : null;
        }
        get players() {
            return this._players;
        }
    }
    exports.DataService = DataService;
});
define("tiles/MapTile", ["require", "exports", "pixi.js", "tiles/Tile", "DataService", "enums/index"], function (require, exports, PIXI, Tile_1, DataService_1, enums_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MapTile extends Tile_1.Tile {
        constructor(params) {
            super(params);
        }
        render() {
            if (this.units.m === 0) {
                return null;
            }
            let key = DataService_1.DataService.getClientResourceKey("hive@2x.png", this.units.m);
            if (this.units.m === 9) {
                key = DataService_1.DataService.getServerResourceKey("fog@2x.png");
            }
            if (this.units.e >= 2 && this.units.e <= 9) {
                key = DataService_1.DataService.getClientResourceKey(enums_2.ClientEvents[this.units.e]);
            }
            const sprite = new PIXI.Sprite(PIXI.loader.resources[key].texture);
            sprite.width = this.size.w;
            sprite.height = this.size.h;
            sprite.position.set(this.position.x, this.position.y);
            return sprite;
        }
    }
    exports.MapTile = MapTile;
});
define("tiles/FoodTile", ["require", "exports", "pixi.js", "tiles/Tile", "DataService"], function (require, exports, PIXI, Tile_2, DataService_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FoodTile extends Tile_2.Tile {
        constructor(params) {
            super(params);
        }
        render() {
            if (this.units.f === 0) {
                return null;
            }
            let key;
            if (this.units.f >= 1 && this.units.f <= 3) {
                key = DataService_2.DataService.getServerResourceKey("foodsmall@2x.png");
            }
            else if (this.units.f >= 4 && this.units.f <= 6) {
                key = DataService_2.DataService.getServerResourceKey("foodmid@2x.png");
            }
            else if (this.units.f >= 7 && this.units.f <= 9) {
                key = DataService_2.DataService.getServerResourceKey("foodbig@2x.png");
            }
            const sprite = new PIXI.Sprite(PIXI.loader.resources[key].texture);
            sprite.width = this.size.w;
            sprite.height = this.size.h;
            sprite.position.set(this.position.x, this.position.y);
            return sprite;
        }
    }
    exports.FoodTile = FoodTile;
});
define("tiles/AntTile", ["require", "exports", "pixi.js", "tiles/Tile", "DataService"], function (require, exports, PIXI, Tile_3, DataService_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AntTile extends Tile_3.Tile {
        constructor(params) {
            super(params);
        }
        render() {
            if (this.units.a === 0 && this.units.e !== 1 && this.units.e !== 10) {
                return null;
            }
            let key = DataService_3.DataService.getClientResourceKey("ant@2x.png", this.units.a);
            if (this.units.e === 1) {
                key = DataService_3.DataService.getClientResourceKey("birth@2x.png");
            }
            if (this.units.e === 10) {
                key = DataService_3.DataService.getClientResourceKey("death@2x.png");
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
});
define("tiles/TilesFactory", ["require", "exports", "enums/index", "tiles/MapTile", "tiles/FoodTile", "tiles/AntTile"], function (require, exports, enums_3, MapTile_1, FoodTile_1, AntTile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TilesFactory {
        createTile(params, type) {
            switch (type) {
                case enums_3.TileType.Map:
                    return new MapTile_1.MapTile(params);
                case enums_3.TileType.Food:
                    return new FoodTile_1.FoodTile(params);
                case enums_3.TileType.Ant:
                    return new AntTile_1.AntTile(params);
                default:
                    return null;
            }
        }
    }
    exports.TilesFactory = TilesFactory;
});
define("Stage", ["require", "exports", "pixi.js", "enums/index", "tiles/TilesFactory"], function (require, exports, PIXI, enums_4, TilesFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Stage extends PIXI.Container {
        constructor(_frame, _skins) {
            super();
            this._frame = _frame;
            this._skins = _skins;
            this._tilesFactory = new TilesFactory_1.TilesFactory();
            this.init();
        }
        init() {
            this.loop([enums_4.TileType.Map]);
            this.loop([enums_4.TileType.Ant, enums_4.TileType.Food]);
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
                    const tile = this._tilesFactory.createTile(tileParams, enums_4.TileType.Map);
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
});
define("controls/PlayPauseControl", ["require", "exports", "controls/Control"], function (require, exports, Control_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("controls/PrevControl", ["require", "exports", "controls/Control"], function (require, exports, Control_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PrevControl extends Control_2.Control {
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
});
define("controls/NextControl", ["require", "exports", "controls/Control"], function (require, exports, Control_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NextControl extends Control_3.Control {
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
});
define("controls/SpeedControl", ["require", "exports", "controls/Control"], function (require, exports, Control_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpeedControl extends Control_4.Control {
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
});
define("controls/DebugControl", ["require", "exports", "controls/Control"], function (require, exports, Control_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DebugControl extends Control_5.Control {
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
});
define("controls/ControlsFactory", ["require", "exports", "enums/index", "controls/PlayPauseControl", "controls/PrevControl", "controls/NextControl", "controls/SpeedControl", "controls/DebugControl"], function (require, exports, enums_5, PlayPauseControl_1, PrevControl_1, NextControl_1, SpeedControl_1, DebugControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ControlsFactory {
        createControl(type) {
            switch (type) {
                case enums_5.ControlType.PlayPause:
                    return new PlayPauseControl_1.PlayPauseControl();
                case enums_5.ControlType.Prev:
                    return new PrevControl_1.PrevControl();
                case enums_5.ControlType.Next:
                    return new NextControl_1.NextControl();
                case enums_5.ControlType.Speed:
                    return new SpeedControl_1.SpeedControl();
                case enums_5.ControlType.Debug:
                    return new DebugControl_1.DebugControl();
                default:
                    return null;
            }
        }
    }
    exports.ControlsFactory = ControlsFactory;
});
define("controls/Progress", ["require", "exports", "Player"], function (require, exports, Player_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Progress {
        constructor() {
            this._age = 0;
            this._position = 0;
            this._total = 0;
            Player_2.Player.instance.on(Player_2.Player.onFrameRendered, (data) => this.update(data));
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
});
define("controls/Controls", ["require", "exports", "enums/index", "controls/ControlsFactory", "controls/Progress"], function (require, exports, enums_6, ControlsFactory_1, Progress_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Controls {
        constructor() {
            this._controlsFactory = null;
            this._controlsFactory = new ControlsFactory_1.ControlsFactory();
            this.progress = new Progress_1.Progress();
            this.addButtons();
        }
        addButtons() {
            this.playPause = this._controlsFactory.createControl(enums_6.ControlType.PlayPause);
            this.prev = this._controlsFactory.createControl(enums_6.ControlType.Prev);
            this.next = this._controlsFactory.createControl(enums_6.ControlType.Next);
            this.speed = this._controlsFactory.createControl(enums_6.ControlType.Speed);
            this.debug = this._controlsFactory.createControl(enums_6.ControlType.Debug);
        }
    }
    exports.Controls = Controls;
});
define("Player", ["require", "exports", "pixi.js", "events", "local-storage", "Config", "DataService", "Stage", "controls/Controls", "./resources/styles.css"], function (require, exports, PIXI, events_1, ls, Config_3, DataService_4, Stage_1, Controls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Player extends events_1.EventEmitter {
        constructor(_data, _target = "body", _play = Config_3.Config.play, _speed = Config_3.Config.speed) {
            super();
            this._data = _data;
            this._target = _target;
            this._play = _play;
            this._speed = _speed;
            this._playerContainer = null;
            this._app = null;
            this._stages = [];
            this._prevStage = null;
            this._currentStage = null;
            this._currentIndex = 0;
            this._total = 0;
            this._loaded = false;
            this._playing = false;
            this.controls = null;
            if (!this._data) {
                throw new Error("JSON Data is required.");
            }
            this._dataService = new DataService_4.DataService(this._data);
            this.init();
        }
        init() {
            return __awaiter(this, void 0, void 0, function* () {
                Player.instance = this;
                yield this._dataService.loadAll();
                this.createRenderer();
                this.createStages();
                this.controls = new Controls_1.Controls();
                if (this._play) {
                    this.play();
                }
                else {
                    this.render();
                }
                this.emit(Player.onReady);
            });
        }
        createRenderer() {
            this._playerContainer = document.querySelector(this._target);
            if (!this._playerContainer) {
                throw new Error(`Target: '${this._target}' not found.`);
            }
            this._app = new PIXI.Application({
                width: window.innerWidth,
                height: window.innerHeight,
                transparent: true
            });
            this._app.view.classList.add("ant-renderer");
            this.resize();
            this._playerContainer.innerHTML = "";
            this._playerContainer.appendChild(this._app.view);
        }
        createStages() {
            const map = this._dataService.map;
            for (let frame of map) {
                const stage = new Stage_1.Stage(frame, this.skins);
                this._app.stage.addChild(stage);
                this._stages.push(stage);
            }
            this._total = this._app.stage.children.length;
            this._loaded = true;
        }
        render() {
            this._prevStage = this._currentStage;
            this._currentStage = this._app.stage.children[this._currentIndex];
            if (!this._currentStage) {
                return this.pause();
            }
            if (this._prevStage) {
                this._prevStage.visible = false;
            }
            this._currentStage.visible = true;
            this._app.render();
            this.emit(Player.onFrameRendered, { index: this._currentIndex, total: this._total });
            if (!this._app.stage.children[this._currentIndex + 1]) {
                this.pause();
            }
        }
        resize() {
            const dimensions = this._dataService.count;
            if (!this._app || !dimensions) {
                return;
            }
            const width = dimensions.tiles * Config_3.Config.size.width;
            const height = dimensions.rows * Config_3.Config.size.height;
            this._app.renderer.resize(width, height);
            this._playerContainer.style.width = `${width}px`;
        }
        get intervalTime() {
            return Math.floor(Config_3.Config.interval / this._speed);
        }
        play() {
            if (this._playing || !this._loaded) {
                return;
            }
            this._playing = true;
            this._interval = window.setInterval(() => {
                this._currentIndex++;
                this.render();
            }, this.intervalTime);
            this.emit(Player.onStarted);
            this.render();
        }
        pause() {
            if (!this._playing || !this._loaded || !this._interval) {
                return;
            }
            this._playing = false;
            clearInterval(this._interval);
            this._interval = null;
            this.emit(Player.onPaused);
        }
        prev() {
            if (!this._loaded) {
                return;
            }
            this._currentIndex--;
            if (this._currentIndex < 0) {
                this._currentIndex = 0;
                return this.pause();
            }
            this.pause();
            this.render();
        }
        next() {
            if (!this._loaded) {
                return;
            }
            this._currentIndex++;
            if (this._currentIndex >= this._total) {
                this._currentIndex = this._total - 1;
                return this.pause();
            }
            this.pause();
            this.render();
        }
        set speed(speed) {
            const played = this._playing;
            this.pause();
            this._speed = speed;
            if (played) {
                this.play();
            }
        }
        get speed() {
            return this._speed;
        }
        get currentIndex() {
            return this._currentIndex;
        }
        get total() {
            return this._total;
        }
        get isPlaying() {
            return this._playing;
        }
        get players() {
            return this._dataService.players;
        }
        get skins() {
            const skins = {};
            this.players.forEach((player) => {
                skins[player.info.skin] = player.username;
            });
            return skins;
        }
        get size() {
            return { width: this._dataService.count.tiles, height: this._dataService.count.rows };
        }
        get stage() {
            return this._stages[this._currentIndex];
        }
        get currentUser() {
            return ls("ant-user");
        }
    }
    Player.onReady = "ant.ready";
    Player.onFrameRendered = "ant.frameRendered";
    Player.onPaused = "ant.paused";
    Player.onStarted = "ant.started";
    Player.instance = null;
    exports.Player = Player;
    exports.AnthivePlayer = Player;
});
//# sourceMappingURL=player-build.js.map