export interface IPayload {
    id: string;
    ants: Array<any>;
    map: {
        width: number;
        height: number;
        cells: Array<Array<{
            food: number;
            hive: string;
            ant: string;
        }>>;
    };
}
