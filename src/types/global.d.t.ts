import {MongoClient} from "mongodb";

/*export {};*/

export declare global {
    var _mongo: Promise<MongoClient> | undefined;
}