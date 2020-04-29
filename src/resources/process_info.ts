import { Resource } from "../resource";
import { Action } from "./action";
import { API } from "../api";

export type Process = {
    process_number: string, 
    auth_id: number
};

export class ProcessInfo extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'process-infos';
    }

    constructor(API: API) {
        super(API);
        this.action = new Action(API);
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`);
    }

    /**
     * getNewProcessInfo
     */
    public async getNewProcessInfo(process: Process): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, process);
    }
}