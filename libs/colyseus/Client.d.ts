import { Signal } from "signals.js";
import { Room } from "./Room";
import { Connection } from "./Connection";
export declare class Client {
    id?: string;
    onOpen: Signal;
    onMessage: Signal;
    onClose: Signal;
    onError: Signal;
    protected connection: Connection;
    protected rooms: {
        [id: string]: Room;
    };
    protected connectingRooms: {
        [id: string]: Room;
    };
    protected joinRequestId: number;
    protected hostname: string;
    protected storage: Storage;
    constructor(url: string);
    protected createConnection(colyseusid: string): void;
    join<T>(roomName: string, options?: any): Room<T>;
    /**
     * @override
     */
    protected onMessageCallback(event: any): void;
}
