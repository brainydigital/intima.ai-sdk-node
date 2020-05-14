import { Resource } from "../api/resource";
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
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }
    
    /**
     * consultarResultadosDaAcao
     */
    public consultarResultadosDaAcao(action_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, action_id);
        return resource.paginate();
    }
}