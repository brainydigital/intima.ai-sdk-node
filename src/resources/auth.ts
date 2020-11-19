import { API } from "../api/api";
import { Resource } from "../api/resource";
import { AtivarIntimacoesParaAutenticacao } from "../models/AtivarIntimacoesParaAutenticacao";
import { NovaAutenticacao } from "../models/NovaAutenticacao";
import { AtualizarAutenticacao } from "../models/AtualizarAutenticacao";

export class Auth extends Resource {

    getResourceEndpoint() {
        return 'autenticacoes';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem uma autenticação por id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra uma nova autenticação
     */
    public async cadastrarNovaAutenticacao(autenticacao: NovaAutenticacao): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, autenticacao, {}, {}, null, true);
    }

    /**
     * Atualiza uma autenticação
     */
    public async atualizarAutenticacao(autenticacao_id: number, atualizar_autenticacao: AtualizarAutenticacao): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${autenticacao_id}/atualizar`, atualizar_autenticacao, {}, {}, null, true);
    }

    /**
     * Ativa a captura de intimações para uma autenticação
     */
    public async ativarCapturaDeIntimacoesParaAutenticacao(autenticacao_id: number, ativar_autenticacao: AtivarIntimacoesParaAutenticacao): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${autenticacao_id}/intimacoes/ativar`, ativar_autenticacao, {}, {}, null, true);
    }

    /**
     * Desativa a captura de intimações para uma autenticação
     */
    public async desativarCapturaDeIntimacoesParaAutenticacao(autenticacao_id: number): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${autenticacao_id}/intimacoes/desativar`, {}, {}, {}, null, true);
    }
}