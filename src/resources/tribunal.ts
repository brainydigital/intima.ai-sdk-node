import { Resource } from "../api/resource";
import { API } from "../api/api";

export class Tribunal extends Resource {
    
    getResourceEndpoint() {
        return 'tribunals';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

}