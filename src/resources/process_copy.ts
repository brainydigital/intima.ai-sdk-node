import { Resource } from "../resource";
import { Action } from "./action";
import { API } from "../api/api";

export type Copy = {
    process_number: string, 
    auth_id: number
};

export class ProcessCopy extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'process-copies';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * getNewCopy
     */
    public async getNewCopy(copy: Copy): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, copy, {}, {}, null, true);
    }
}