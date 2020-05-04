import { Resource } from "../resource";
import { API } from "../api/api";

export type NewAuth = {
    tribunal_id: number, 
    user_certificate_id?: number,
    login?: string,
    password?: string
};

export type EnableAuth = {
    tabs: Array<string>, 
    week_days: Array<number>,
    day_hour: Array<string>
};

export class Auth extends Resource {
    
    getResourceEndpoint() {
        return 'auths';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * getNewAuth
     */
    public async getNewAuth(auth: NewAuth): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, auth, {}, {}, null, true);
    }

    /**
     * enableIntimationsAuth
     */
    public async enableIntimationsAuth(auth_id: number, enable_auth: EnableAuth): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${auth_id}/intimations/enable`, enable_auth, {}, {}, null, true);
    }

    /**
     * disableIntimationsAuth
     */
    public async disableIntimationsAuth(auth_id: number): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${auth_id}/intimations/disable`, {}, {}, {}, null, true);
    }

}