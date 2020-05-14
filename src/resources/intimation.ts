import { Resource } from "../api/resource";
import { API } from "../api/api";

export class Intimation extends Resource {
    
    getResourceEndpoint() {
        return 'intimations';
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
     * marcarIntimacaoComoRevisada
     */
    public async marcarIntimacaoComoRevisada(intimation_id: number): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${intimation_id}/mark-as-revised`, {}, {}, {}, null, true);
    }

}