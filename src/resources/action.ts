import { Resource } from "../resource";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";

export class Action extends Resource {
    
    getResourceEndpoint() {
        return 'actions';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }
    
    /**
     * getActionResults
     */
    public getActionResults(action_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, action_id);
        return resource.paginate();
    }
}