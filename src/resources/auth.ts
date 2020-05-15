import { Resource } from "../api/resource";
import { API } from "../api/api";
import { AtivarIntimacoesParaAutenticacao } from "../models/AtivarIntimacoesParaAutenticacao";
import { NovaAutenticacao } from "../models/NovaAutenticacao";

export class Auth extends Resource {
    
    getResourceEndpoint() {
        return 'auths';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * cadastrarNovaAutenticacao
     */
    public async cadastrarNovaAutenticacao(auth: NovaAutenticacao): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, auth, {}, {}, null, true);
    }

    /**
     * ativarCapturaDeIntimacoesParaAutenticacao
     */
    public async ativarCapturaDeIntimacoesParaAutenticacao(auth_id: number, enable_auth: AtivarIntimacoesParaAutenticacao): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${auth_id}/intimations/enable`, enable_auth, {}, {}, null, true);
    }

    /**
     * desativarCapturaDeIntimacoesParaAutenticacao
     */
    public async desativarCapturaDeIntimacoesParaAutenticacao(auth_id: number): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${auth_id}/intimations/disable`, {}, {}, {}, null, true);
    }

}