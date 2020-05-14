import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";
import { ProcessSearchAnalyse, SearchAnalyse } from "./process_search_analyse";
import { isEmpty } from "../utils/utils";
import { Paginator } from "../api/paginator";

export type Search = {
    auth_id: number,
    process_number?: string,
    nome_parte?: string,
    nome_representante?: string,
    token?: string
}

export class ProcessSearch extends Resource {

    protected action: Action;

    protected search_analyse: ProcessSearchAnalyse;

    getResourceEndpoint() {
        return 'process-searchs';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
        this.search_analyse = new ProcessSearchAnalyse(API, action, this);
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * cadastrarNovaConsulta
     */
    public async cadastrarNovaConsulta(search: Search): Promise<any> {
        if (isEmpty(search.process_number) && isEmpty(search.nome_parte) && isEmpty(search.nome_representante)) {
            throw 'Você precisa fornecer ao menos um parametro para a busca.';
        }
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, search, {}, {}, null, true);
    }

    /**
     * consultarResultadosDaConsulta
     */
    public consultarResultadosDaConsulta(search_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, search_id);
        return resource.paginate();
    }

    /**
     * listarPreAnalisesDeConsultas
     */
    public async listarPreAnalisesDeConsultas(): Promise<Paginator> {
        return await this.search_analyse.paginate();
    }

    /**
     * consultarPorIdPreAnaliseDeConsulta
     */
    public async consultarPorIdPreAnaliseDeConsulta(id: number): Promise<any> {
        return await this.getAPI().get(`${this.search_analyse.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

     /**
     * cadastrarPreAnaliseDeConsulta
     */
    public async cadastrarPreAnaliseDeConsulta(search_analyse: SearchAnalyse): Promise<any> {
        if (isEmpty(search_analyse.process_number) && isEmpty(search_analyse.nome_parte) && isEmpty(search_analyse.nome_representante)) {
            throw 'Você precisa fornecer ao menos um parametro para a busca.';
        }
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.search_analyse.getResourceEndpoint()}`, search_analyse, {}, {}, null, true);
    }

}