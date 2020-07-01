import { Resource } from "../../api/resource";
import { API } from "../../api/api";

export class User extends Resource {
    
    getResourceEndpoint() {
        return 'usuarios';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * Obtem as informações do usuário autenticado
     */
    public async consultarUsuario(): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}`, {}, {}, true);
    }

}