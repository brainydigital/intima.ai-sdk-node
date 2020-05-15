import { Resource } from "../../api/resource";
import { API } from "../../api/api";
import { Webhook } from "../../models/Webhook";

export class UserWebhook extends Resource {
    
    getResourceEndpoint() {
        return 'user-webhooks';
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
     * cadastrarNovoWebhook
     */
    public async cadastrarNovoWebhook(user_webhook: Webhook): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, user_webhook, {}, {}, null, true);
    }

    /**
     * atualizarWebhook
     */
    public async atualizarWebhook(user_webhook_id: number, user_webhook: Webhook): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${user_webhook_id}`, user_webhook, {}, {}, null, true);
    }

    /**
     * excluirWebhook
     */
    public async excluirWebhook(user_webhook_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${user_webhook_id}`, {}, {}, true);
    }

}