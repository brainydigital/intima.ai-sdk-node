import { Resource } from "../api/resource";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";

export class Action extends Resource {
    
    getResourceEndpoint() {
        return 'acoes';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem uma ação pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }
    
    /**
     * Obtem os resultados de uma ação pelo id
     */
    public consultarResultadosDaAcao(acao_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, acao_id);
        return resource.paginar();
    }
}