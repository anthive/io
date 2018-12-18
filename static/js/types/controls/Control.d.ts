import { IControl } from "../interfaces";
import { Player } from "../Player";
export declare class Control implements IControl {
    protected readonly player: Player;
    onClick(params?: any): void;
    readonly disabled: boolean;
}
