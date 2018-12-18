export interface IPlayer {
    username: string;
    info: {
        city: string;
        country: string;
        lang: string;
        org: string;
        picture: string;
        repo: string;
        sha: string;
        skin: number;
    };
    stats: {
        avgRT: number;
        errors: number;
        maxAge: number;
        maxAnts: number;
        maxHive: number;
    };
}
