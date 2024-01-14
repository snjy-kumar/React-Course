import conf from "../conf/conf";
import { Client, ID, Database, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.database = new Database(this.client);
        this.bucket = new Storage(this.client);
    }
}


const service = new Service();
 export default service;