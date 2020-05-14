import { Resource } from "../../api/resource";
import { API } from "../../api/api";

export class User extends Resource {
    
    getResourceEndpoint() {
        return 'user';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * consultarUsuario
     */
    public async consultarUsuario(): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}`, {}, {}, true);
    }

}