import { Resource } from "../../api/resource";
import { API } from "../../api/api";
import { Webhook } from "../../models/Webhook";

export class UserWebhook extends Resource {
    
    getResourceEndpoint() {
        return 'usuarios-webhooks';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem um webhook de usuário cadastrado no Intima.ai pelo id
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * Cadastra um novo webhook de usuário
     */
    public async cadastrarNovoWebhook(webhook: Webhook): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, webhook, {}, {}, null, true);
    }

    /**
     * Atualiza um webhook de usuário pelo id
     */
    public async atualizarWebhook(webhook_id: number, webhook: Webhook): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${webhook_id}`, webhook, {}, {}, null, true);
    }

    /**
     * Deleta um webhook de usuário pelo id
     */
    public async excluirWebhook(webhook_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${webhook_id}`, {}, {}, true);
    }

}