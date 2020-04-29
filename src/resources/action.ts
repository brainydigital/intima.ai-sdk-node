import { Resource } from "../resource";
import { API } from "../api";

export class Action extends Resource {
    
    getResourceEndpoint() {
        return 'actions';
    }

    constructor(API: API) {
        super(API);
    }
    
}