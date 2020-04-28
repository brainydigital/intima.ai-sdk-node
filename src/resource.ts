import { API } from "./api";
import { Paginator } from "./paginator";

export abstract class Resource extends API {
    
    abstract getResourceEndpoint(): string;

    private paginator: Paginator;

    constructor() {
        super();
        this.paginator = new Paginator(this);
    }

    public paginate() {
        return this.paginator;
    }

}