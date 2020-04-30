import { Resource } from "../../resource";
import { API } from "../../api/api";

export type Dependent = {
    email: string
}

export class UserDependent extends Resource {
    
    getResourceEndpoint() {
        return 'user-dependents';
    }

    constructor(API: API) {
        super(API);
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`);
    }

    /**
     * getNewUserDependent
     */
    public async getNewUserDependent(user_dependent: Dependent): Promise<any> {
        return await this.getAPI().post(`${this.getResourceEndpoint()}`, user_dependent);
    }

    /**
     * updateUserDependent
     */
    public async updateUserDependent(user_dependent_id: number, user_dependent: Dependent): Promise<any> {
        return await this.getAPI().put(`${this.getResourceEndpoint()}/${user_dependent_id}`, user_dependent);
    }

    /**
     * deleteUserDependent
     */
    public async deleteUserDependent(user_dependent_id: number): Promise<any> {
        return await this.getAPI().delete(`${this.getResourceEndpoint()}/${user_dependent_id}`);
    }
}