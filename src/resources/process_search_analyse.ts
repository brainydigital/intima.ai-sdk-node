import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ProcessSearch } from "./process_search";

export class ProcessSearchAnalyse extends Resource {

    protected action: Action;

    protected resource_path = 'search-analyses';

    getResourceEndpoint() {
        return this.resource_path;
    }

    constructor(API: API, action: Action, process_search?: ProcessSearch) {
        super(API);
        this.action = action;
        if (process_search) {
            this.resource_path = `${process_search.getResourceEndpoint()}/${this.resource_path}`;
        }
    }

}