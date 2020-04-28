import { Resource } from "../resource";
import { Action } from "./action";

export class ProcessCopy extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'process-copies';
    }

    constructor() {
        super();
        this.action = new Action();
    }

    /**
     * getAll
     */
    public async getAll(): Promise<any> {
        return await this.get(this.getResourceEndpoint());
    }

    /**
     * getNewCopy
     */
    public async getNewCopy(process_number: string, auth_id: string): Promise<any> {
        return await this.post(`actions/${this.getResourceEndpoint()}`, { process_number, auth_id });
    }
}