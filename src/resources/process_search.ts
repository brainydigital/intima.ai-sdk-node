import { API } from "../api/api";
import { Paginator } from "../api/paginator";
import { Resource } from "../api/resource";
import { ConsultaProcessual } from "../models/ConsultaProcessual";
import { PreAnaliseDeConsultaProcessual } from "../models/PreAnaliseDeConsultaProcessual";
import { isEmpty } from "../utils/utils";
import { Action } from "./action";
import { ProcessSearchAnalyse } from "./process_search_analyse";
import { ResourceResult } from "./resource_result";

export class ProcessSearch extends Resource {

    protected action: Action;

    protected search_analyse: ProcessSearchAnalyse;

    getResourceEndpoint() {
        return 'consultas-processuais';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
        this.search_analyse = new ProcessSearchAnalyse(API, action, this);
    }

    /**
     * Obtem uma consulta processual pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra uma nova consulta processual
     */
    public async cadastrarNovaConsulta(consulta_processual: ConsultaProcessual): Promise<any> {
        if (isEmpty(consulta_processual.numero_processo) && isEmpty(consulta_processual.nome_parte) && isEmpty(consulta_processual.nome_representante) && isEmpty(consulta_processual.oab_numero) && isEmpty(consulta_processual.oab_letra) && isEmpty(consulta_processual.oab_uf) && isEmpty(consulta_processual.token)) {
            throw 'Você precisa fornecer ao menos um parametro para a busca.';
        }
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, consulta_processual, {}, {}, null, true);
    }

    /**
     * Obtem os resultados das consultas processual pelo id
     */
    public consultarResultadosDaConsulta(consulta_processual_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, consulta_processual_id);
        return resource.paginar();
    }

    /**
     * Obtem um Paginator com as pré-analises de consultas processuais
     */
    public async listarPreAnalisesDeConsultas(): Promise<Paginator> {
        return await this.search_analyse.paginar();
    }

    /**
     * Obtem uma pré-analise de uma consulta processual pelo id
     */
    public async consultarPorIdPreAnaliseDeConsulta(id: number): Promise<any> {
        return await this.getAPI().get(`${this.search_analyse.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
    * Cadastra uma nova pré-analise para uma consulta processual
    */
    public async cadastrarPreAnaliseDeConsulta(pre_analise_de_consulta_processual: PreAnaliseDeConsultaProcessual): Promise<any> {
        if (isEmpty(pre_analise_de_consulta_processual.numero_processo) && isEmpty(pre_analise_de_consulta_processual.nome_parte) && isEmpty(pre_analise_de_consulta_processual.nome_representante) && isEmpty(pre_analise_de_consulta_processual.oab_numero) && isEmpty(pre_analise_de_consulta_processual.oab_letra) && isEmpty(pre_analise_de_consulta_processual.oab_uf)) {
            throw 'Você precisa fornecer ao menos um parametro para a busca.';
        }
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.search_analyse.getResourceEndpoint()}`, pre_analise_de_consulta_processual, {}, {}, null, true);
    }

}