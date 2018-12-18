"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const events_1 = require("events");
const ls = require("local-storage");
require("./resources/styles.css");
const Config_1 = require("./Config");
const DataService_1 = require("./DataService");
const Stage_1 = require("./Stage");
const Controls_1 = require("./controls/Controls");
class Player extends events_1.EventEmitter {
    constructor(_data, _target = "body", _play = Config_1.Config.play, _speed = Config_1.Config.speed) {
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
        this._dataService = new DataService_1.DataService(this._data);
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
        const width = dimensions.tiles * Config_1.Config.size.width;
        const height = dimensions.rows * Config_1.Config.size.height;
        this._app.renderer.resize(width, height);
        this._playerContainer.style.width = `${width}px`;
    }
    get intervalTime() {
        return Math.floor(Config_1.Config.interval / this._speed);
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
//# sourceMappingURL=Player.js.map