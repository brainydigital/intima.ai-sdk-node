import { Resource } from "../../api/resource";
import { API } from "../../api/api";

export enum ACTION_TYPE {
    PROCESS_INFO = 0,
    PROCESS_COPY,
    PROCESS_INTIMACOES,
    PROCESS_ESCUTA,
    PROCESS_PROTOCOLO,
    PROCESS_PROTOCOLO_HABILITACAO,
    PROCESS_ANDAMENTOS,
    PROCESS_CONSULTA,
    PROCESS_CONSULTA_PRE_ANALISE
}

export enum HTTP_VERB {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export type Webhook = {
    action_type: ACTION_TYPE | number,
    http_verb: HTTP_VERB | string,
    url: string
}

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