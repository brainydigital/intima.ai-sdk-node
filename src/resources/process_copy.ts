import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { CopiaProcessual } from "../models/CopiaProcessual";

export class ProcessCopy extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'copias-processuais';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * Obtem uma cópia processual pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra uma nova cópia processual
     */
    public async cadastrarNovaCopia(copia_processual: CopiaProcessual): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, copia_processual, {}, {}, null, true);
    }
}