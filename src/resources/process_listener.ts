import { Resource } from "../resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ResourceResult } from "./resource_result";

export type Listener = {
    process_number: string,
    auth_id: number,
    schedule_times: Array<String>
}

export type ListenerUpdate = {
    schedule_times: Array<String>
}

export class ProcessListener extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-listeners';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * getNewListener
     */
    public async getNewListener(listener: Listener): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, listener, {}, {}, null, true);
    }

    /**
     * captureListener
     */
    public async captureListener(listener_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${listener_id}/capture`, {}, {}, true);
    }

    /**
     * getNewListenerAndCapture
     */
    public async getNewListenerAndCapture(listener: Listener): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/create-and-capture`, listener, {}, {}, null, true);
    }

    /**
     * getListenerResults
     */
    public getListenerResults(listener_id: number) {
        const resource = new ResourceResult(this.getAPI(), this, listener_id);
        return resource.paginate();
    }

    /**
     * updateListener
     */
    public async updateListener(listener_id: number, listener: ListenerUpdate): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${listener_id}`, listener, {}, {}, null, true);
    }

    /**
     * deleteListener
     */
    public async deleteListener(listener_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${listener_id}`, {}, {}, true);
    }
}