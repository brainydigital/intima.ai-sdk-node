import { Resource } from "../../resource";
import { API } from "../../api/api";

export class User extends Resource {
    
    getResourceEndpoint() {
        return 'user';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * getUser
     */
    public async getUser(): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}`);
    }

}