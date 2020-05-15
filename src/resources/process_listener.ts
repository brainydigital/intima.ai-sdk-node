import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";
import { EscutaProcessual } from "../models/EscutaProcessual";
import { AtualizarEscutaProcessual } from "../models/AtualizarEscutaProcessual";

export class ProcessListener extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-listeners';
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
     * cadastrarNovaEscuta
     */
    public async cadastrarNovaEscuta(listener: EscutaProcessual): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, listener, {}, {}, null, true);
    }

    /**
     * capturarEscuta
     */
    public async capturarEscuta(listener_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${listener_id}/capture`, {}, {}, true);
    }

    /**
     * cadastrarNovaEscutaECapturar
     */
    public async cadastrarNovaEscutaECapturar(listener: EscutaProcessual): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/create-and-capture`, listener, {}, {}, null, true);
    }

    /**
     * consultarResultadosCapturadosDaEscuta
     */
    public consultarResultadosCapturadosDaEscuta(listener_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, listener_id);
        return resource.paginate();
    }

    /**
     * atualizarEscuta
     */
    public async atualizarEscuta(listener_id: number, listener: AtualizarEscutaProcessual): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${listener_id}`, listener, {}, {}, null, true);
    }

    /**
     * excluirEscuta
     */
    public async excluirEscuta(listener_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${listener_id}`, {}, {}, true);
    }
}