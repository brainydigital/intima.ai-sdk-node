import { Resource } from "../resource";
import { API } from "../api/api";

export class Tribunal extends Resource {
    
    getResourceEndpoint() {
        return 'tribunals';
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

}