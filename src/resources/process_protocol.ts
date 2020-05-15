import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ProtocoloProcessual } from "../models/ProtocoloProcessual";

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
    public async cadastrarNovoProtocolo(protocol: ProtocoloProcessual): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, protocol, {}, {}, null, true);
    }
}