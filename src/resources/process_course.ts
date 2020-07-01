import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";
import { AndamentoProcessual } from "../models/AndamentoProcessual";

export class ProcessCourse extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'andamentos-processuais';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * Obtem um andamento processual pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra um novo andamento processual
     */
    public async cadastrarNovoAndamento(andamento_processual: AndamentoProcessual): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, andamento_processual, {}, {}, null, true);
    }

    /**
     * Captura os andamentos de um andamento processual pré-cadastrado no Intima.ai
     */
    public async capturarAndamentos(andamento_processual_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${andamento_processual_id}/capturar`, {}, {}, true);
    }

    /**
     * Castrada e captura os andamentos de um andamento processual
     */
    public async cadastrarNovoAndamentoECapturarAndamentos(andamento_processual: AndamentoProcessual): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/criar-e-capturar`, andamento_processual, {}, {}, null, true);
    }

    /**
     * Obtem os resultados da captura do andamento processual pré-cadastrado no Intima.ai
     */
    public consultarResultadosDoAndamento(andamento_processual_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, andamento_processual_id);
        return resource.paginar();
    }

    /**
     * Deleta um andamento processual pelo id
     */
    public async excluirAndamento(andamento_processual_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${andamento_processual_id}`, {}, {}, true);
    }
}