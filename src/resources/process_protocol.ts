import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";

export type Protocol = {
    process_number: string,
    auth_id: number,
    tipo_documento_mensagem_geral: number,
    descricao?: string,
    mensagem_geral?: string,
    peticao?: { arquivo: string, tipo_documento: number, descricao_documento: string },
    documentos?: Array<{ arquivo: string, tipo_documento: number, descricao_documento: string, order: number }>
}

export class ProcessProtocol extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-protocols';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * cadastrarNovoProtocolo
     */
    public async cadastrarNovoProtocolo(protocol: Protocol): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, protocol, {}, {}, null, true);
    }
}