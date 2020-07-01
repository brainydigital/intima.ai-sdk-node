import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";
import { EscutaProcessual } from "../models/EscutaProcessual";
import { AtualizarEscutaProcessual } from "../models/AtualizarEscutaProcessual";

export class ProcessListener extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'escutas-processuais';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * Obtem uma escuta processual pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra uma nova escuta processual
     */
    public async cadastrarNovaEscuta(escuta_processual: EscutaProcessual): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, escuta_processual, {}, {}, null, true);
    }

    /**
     * Captura uma escuta processual pelo id
     */
    public async capturarEscuta(escuta_processual_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${escuta_processual_id}/capturar`, {}, {}, true);
    }

    /**
     * Cadastra e captura uma escuta processual no Intima.ai
     */
    public async cadastrarNovaEscutaECapturar(escuta_processual: EscutaProcessual): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/criar-e-capturar`, escuta_processual, {}, {}, null, true);
    }

    /**
     * Obtem os resultados capturados de uma escuta processual
     */
    public consultarResultadosCapturadosDaEscuta(escuta_processual_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, escuta_processual_id);
        return resource.paginar();
    }

    /**
     * Atualiza uma escuta processual pelo id
     */
    public async atualizarEscuta(escuta_processual_id: number, escuta_processual: AtualizarEscutaProcessual): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${escuta_processual_id}`, escuta_processual, {}, {}, null, true);
    }

    /**
     * Deleta uma escuta processual pelo id
     */
    public async excluirEscuta(escuta_processual_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${escuta_processual_id}`, {}, {}, true);
    }
}