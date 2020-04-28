import { Resource } from "../resource";

export class Action extends Resource {
    
    getResourceEndpoint() {
        return 'actions';
    }

    constructor() {
        super();
    }

    
}