import { Resource } from "../resource";
import { Action } from "./action";
import { API } from "../api";
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

    constructor(API: API) {
        super(API);
        this.action = new Action(API);
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`);
    }

    /**
     * getNewListener
     */
    public async getNewListener(listener: Listener): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, listener);
    }

    /**
     * captureListener
     */
    public async captureListener(listener_id: number): Promise<any> {
        return await this.getAPI().get(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/${listener_id}/capture`);
    }

    /**
     * captureListener
     */
    public async getNewListenerAndCapture(listener: Listener): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}/create-and-capture`, listener);
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
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${listener_id}`, listener);
    }

    /**
     * deleteListener
     */
    public async deleteListener(listener_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${listener_id}`);
    }
}