import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";

export type Process = {
    process_number: string, 
    auth_id: number
};

export class ProcessInfo extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'process-infos';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * capturarNovaInformacaoProcessual
     */
    public async capturarNovaInformacaoProcessual(process: Process): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, process, {}, {}, null, true);
    }
}