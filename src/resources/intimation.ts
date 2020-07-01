import { Resource } from "../api/resource";
import { API } from "../api/api";

export class Intimation extends Resource {
    
    getResourceEndpoint() {
        return 'intimacoes';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem uma intimação pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Marca uma intimação como revisada
     */
    public async marcarIntimacaoComoRevisada(intimacao_id: number): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${intimacao_id}/marcar-como-revisada`, {}, {}, {}, null, true);
    }

}