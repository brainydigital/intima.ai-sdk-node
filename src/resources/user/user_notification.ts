import { Resource } from "../../api/resource";
import { API } from "../../api/api";

export class UserNotification extends Resource {
    
    getResourceEndpoint() {
        return 'user-notifications';
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
     * cadastrarNovoEmailParaNotificacoes
     */
    public async cadastrarNovoEmailParaNotificacoes(email: string): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, { user_dependent: email }, {}, {}, null, true);
    }

    /**
     * atualizarEmailParaNotificacoes
     */
    public async atualizarEmailParaNotificacoes(user_email_notification_id: number, email: string): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${user_email_notification_id}`, { user_dependent: email }, {}, {}, null, true);
    }

    /**
     * excluirEmailParaNotificacoes
     */
    public async excluirEmailParaNotificacoes(user_email_notification_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${user_email_notification_id}`, {}, {}, true);
    }
}