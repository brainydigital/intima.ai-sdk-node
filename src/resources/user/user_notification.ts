import { Resource } from "../../api/resource";
import { API } from "../../api/api";

export class UserNotification extends Resource {
    
    getResourceEndpoint() {
        return 'usuarios-notificacoes';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem um email cadastrado para receber notificações pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra um novo email para receber notificações
     */
    public async cadastrarNovoEmailParaNotificacoes(email: string): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, { email: email }, {}, {}, null, true);
    }

    /**
     * Atualiza um email para receber notificações pelo id
     */
    public async atualizarEmailParaNotificacoes(email_notificacao_id: number, email: string): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${email_notificacao_id}`, { email: email }, {}, {}, null, true);
    }

    /**
     * Deleta um email cadastrado pelo id, que deixara de receber notificações
     */
    public async excluirEmailParaNotificacoes(email_notificacao_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${email_notificacao_id}`, {}, {}, true);
    }
}