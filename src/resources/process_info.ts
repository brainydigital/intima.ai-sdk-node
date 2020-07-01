import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { InformacaoProcessual } from "../models/InformacaoProcessual";

export class ProcessInfo extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'informacoes-processuais';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * Obtem uma informação processual pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra uma nova informação processual
     */
    public async capturarNovaInformacaoProcessual(informacao_processual: InformacaoProcessual): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, informacao_processual, {}, {}, null, true);
    }
}