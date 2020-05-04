import { Resource } from "../resource";
import { API } from "../api/api";

export class Intimation extends Resource {
    
    getResourceEndpoint() {
        return 'intimations';
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
     * markAsRevised
     */
    public async markAsRevised(intimation_id: number): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${intimation_id}/mark-as-revised`, {}, {}, {}, null, true);
    }

}