import { Progress } from "./Progress";
import { PlayPauseControl } from "./PlayPauseControl";
import { PrevControl } from "./PrevControl";
import { NextControl } from "./NextControl";
import { SpeedControl } from "./SpeedControl";
import { DebugControl } from "./DebugControl";
export declare class Controls {
    private _controlsFactory;
    progress: Progress;
    playPause: PlayPauseControl;
    prev: PrevControl;
    next: NextControl;
    speed: SpeedControl;
    debug: DebugControl;
    constructor();
    private addButtons;
}
