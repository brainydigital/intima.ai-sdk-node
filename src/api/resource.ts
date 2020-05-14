import { API } from "./api";
import { Paginator } from "./paginator";

export abstract class Resource {
    
    private API: API;

    private paginator: Paginator;

    constructor(API: API) {
        this.API = API;
        this.paginator = new Paginator(this);
    }

    abstract getResourceEndpoint(): string;

    public paginate(): Paginator {
        return this.paginator;
    }

    public getAPI(): API {
        return this.API;
    }

}